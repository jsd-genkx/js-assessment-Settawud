"use strict";
// JS Assessment: Find Your Hat //
import promptSync from "prompt-sync";
import clear from "clear-screen";

const prompt = promptSync({ sigint: true });
const hat = "👒";
const hole = "⚫";
const fieldCharacter = "🟩";
const pathCharacter = "👣";

class Field {
	constructor(field = [[]]) {
		this.field = field;
		this.positionRow = 0;
		this.positionCol = 0;
    // ตำแหน่งเริ่มต้นของผู้เล่นจะถูกกำหนดเป็น pathCharacter โดยอัตโนมัติ
		this.field[this.positionRow][this.positionCol] = pathCharacter;
	}
  
  playGame(){
    let playing = true;
    while (playing){
      this.print()
      this.askQuestion();

      if (!this.isInBounds()){
        console.log('You moved out of bounds! Game over.');
        playing = false;
        continue; //จบการทำงานของรอบนี้
      }

      const currentTile = this.field[this.positionRow][this.positionCol];
      if (currentTile === hole){
          console.log('Oops! You fell into a hole. Game over.');
          playing = false;
      } else if (currentTile === hat){
          console.log('Hooray! You found your hat! You win!');
          playing = false;
      } else {
        // 3. อัปเดตแผนที่เฉพาะเมื่อเดินไปยังช่องว่างเท่านั้น
        this.field[this.positionRow][this.positionCol] = pathCharacter;
      }
    }
  }

  askQuestion () {
    let isValidInput = false;
    do {
      const answer = prompt('Which way? (left(A), right(D), up(W), down(S): ').toLowerCase();
      switch (answer){
        case 'a':
          this.positionCol -= 1;
          isValidInput = true;
          break;
        case 'd':
          this.positionCol += 1;
          isValidInput = true;
          break;
        case 'w':
          this.positionRow -= 1;
          isValidInput = true;
          break;
        case 's':
          this.positionRow += 1;
          isValidInput = true;
          break;
        default:
          console.log('Invalid key. Please use A, D, W, or S.')
      }
    } while (!isValidInput);
  }

  isInBounds (){
    return (
      this.positionCol >= 0 &&
      this.positionRow >= 0 &&
      this.positionCol < this.field[0].length &&
      this.positionRow < this.field.length
    );
  }

  print() {
    // 4. เพิ่มการล้างหน้าจอ
    clear();
    const displayString = this.field.map(row => row.join('')).join('\n');
    console.log(displayString);
  }

  //สร้างสนามให้พร้อมเล่น
  static generateField(height, width, percentage = 0.2){
    const field = new Array(height).fill(0).map(()=>new Array(width));
    for (let y = 0; y < height; y++){
      for (let x = 0 ; x < width ; x++){
        const prob = Math.random();
        field[y][x] = prob > percentage ? fieldCharacter : hole;
      }
    }

    //protect hole around startpoint!
    field[0][0] = fieldCharacter;
    field[1][0] = fieldCharacter;
    field[0][1] = fieldCharacter;

    const hatLocation = {
      x: Math.floor(Math.random() * width),
      y: Math.floor(Math.random() * height)
    };

    while (hatLocation.x === 0 && hatLocation.y === 0){
      hatLocation.x = Math.floor(Math.random() * width);
      hatLocation.y = Math.floor(Math.random() * height);
    }
    field[hatLocation.y][hatLocation.x] = hat;
    return field;
  }

}

// Game Mode ON
// Remark: Code example below should be deleted and use your own code.
const myField = new Field(Field.generateField(10,10));
myField.playGame();

