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
    // ค้นหาตำแหน่งเริ่มต้นของผู้เล่นเมื่อสร้าง object
    this.findStartPosition();
	}

  //หาตำแหน่งผู้เล่น เนื่องจากโจทย์ให้รับ paramerter ได้แค่ ค่าเดียว คือ field
  findStartPosition() {
    for (let y = 0; y < this.field.length; y++) {
      for (let x = 0; x < this.field[y].length; x++) {
        if (this.field[y][x] === pathCharacter) {
          this.positionRow = y;
          this.positionCol = x;
          return; // ออกจากฟังก์ชันเมื่อเจอตำแหน่งแล้ว
        }
      }
    }
  }
  playGame(){
    let playing = true;
    while (playing){
      this.print()
      this.askQuestion();

      // ตรวจสอบว่าผู้เล่นออกนอกขอบเขตหรือไม่
      if (!this.isInBounds()){
        console.log('You moved out of bounds! Game over. 😭💀');
        playing = false;
        continue;  // จบการทำงานของรอบนี้และออกจาก loop
      }

      const currentTile = this.field[this.positionRow][this.positionCol];

      // ตรวจสอบเงื่อนไขการแพ้/ชนะ
      if (currentTile === hole){
          console.log('Oops! You fell into a hole. 😵 Game over.');
          playing = false;
      } else if (currentTile === hat){
          console.log('🎉 Hooray! You found your hat! You win! 🥳');
          playing = false;
      } else {
        // อัปเดตตำแหน่งปัจจุบันของผู้เล่นบนแผนที่
        this.field[this.positionRow][this.positionCol] = pathCharacter;
      }
    }
  }

  moveUp() { this.positionRow -= 1; }
  moveDown() { this.positionRow += 1; }
  moveLeft() { this.positionCol -= 1; }
  moveRight() { this.positionCol += 1; }

  askQuestion () {
    let isValidInput = false;
    do {
      const answer = prompt('Which way? (left(A), right(D), up(W), down(S): ').toLowerCase();
      switch (answer){
        case 'a': this.moveLeft(); isValidInput = true; break;
        case 'd': this.moveRight(); isValidInput = true; break;
        case 'w': this.moveUp(); isValidInput = true; break;
        case 's': this.moveDown(); isValidInput = true; break;
        default: console.log('Invalid key. Please use A, D, W, or S.'); break;
      }
    } while (!isValidInput);
  }

  // ตรวจสอบว่าตำแหน่งปัจจุบันยังอยู่ในขอบเขตของสนามหรือไม่
  isInBounds (){
    return (
      this.positionCol >= 0 &&
      this.positionRow >= 0 &&
      this.positionCol < this.field[0].length &&
      this.positionRow < this.field.length
    );
  }

  print() {
    // ล้างหน้าจอ console ก่อนพิมพ์สนามใหม่
    clear();
    const displayString = this.field.map(row => row.join('')).join('\n');
    console.log(displayString);
  }

  // ฟังก์ชัน static สำหรับสร้างสนามใหม่พร้อมเล่น
  static generateField(height, width, percentage = 0.2){
    //การสุ่มแบบนี้อาจสร้างด่านที่ "หมวก" ถูกล้อมด้วย "หลุม" ทำให้ไม่สามารถชนะได้
    //พัฒนาได้โดยการ แบ่ง Level ตาม percentage ความยาก
    const field = new Array(height).fill(0).map(()=>new Array(width));
    for (let y = 0; y < height; y++){
      for (let x = 0 ; x < width ; x++){
        const prob = Math.random();
        field[y][x] = prob > percentage ? fieldCharacter : hole;
      }
    }

    // สุ่มตำแหน่ง "หมวก" และวางลงไป
    const hatLocation = {
      x: Math.floor(Math.random() * width),
      y: Math.floor(Math.random() * height)
    };
    field[hatLocation.y][hatLocation.x] = hat;

    // สุ่มตำแหน่ง player และวางลงไป
   let startRow, startCol;
    do {
      startRow = Math.floor(Math.random() * height);
      startCol = Math.floor(Math.random() * width);
    } while (
      // ตรวจสอบให้แน่ใจว่าจุดเริ่มต้นไม่ใช่หลุมหรือหมวก
      field[startRow][startCol] === hole ||
      field[startRow][startCol] === hat
    );
    field[startRow][startCol] = pathCharacter;

    return field;
  }

}

// --- เริ่มเกม ---
const myField = new Field(Field.generateField(10, 10, 0.2));
myField.playGame();
