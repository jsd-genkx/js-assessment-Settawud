# JavaScript Assessment: Find Your Hat

[Codecademy](https://www.codecademy.com/projects/practice/find-your-hat)

## Table of Contents

- [JavaScript Assessment: Find Your Hat](#javascript-assessment-find-your-hat)
  - [Table of Contents](#table-of-contents)
  - [Repo Instructions](#repo-instructions)
  - [Project Goals](#project-goals)
  - [Project Requirements](#project-requirements)
    - [Game Rules:](#game-rules)
  - [JavaScript Assessment Rubric](#javascript-assessment-rubric)
    - [Thinking Process](#thinking-process)

---

## Repo Instructions

1. Clone the assessment repository, open it in your working directory, commit your progress accordingly, and push the repository to share it with the instructors.
2. Read the instructions in the `README.md` file.
3. Start the project:

   ```terminal
   npm install
   npm run dev
   ```

4. Edit `package.json` file by updating the `"author"` field with your Zoom name.
5. Edit **Thinking Process** section at the end of the `README.md` file. 👉 [Go to Thinking Process](#thinking-process)

[🔝 Back to Table of Contents](#table-of-contents)

---

## Project Goals

- In this project, you’ll be building an interactive terminal game.
- The scenario is that the player has lost their hat in a field full of holes, and they must navigate back to it without falling down one of the holes or stepping outside of the field.

[🔝 Back to Table of Contents](#table-of-contents)

## Project Requirements

- Your project is centered on a `Field` class.
- Give your `Field` class a `.print()` method that prints the current state of the field.

  > The Field constructor should take a two-dimensional array representing the “field” itself.
  >
  > A field consists of a grid containing “holes” (O) and one “hat” (^).
  >
  > We use a neutral background character (░) to indicate the rest of the field itself.
  >
  > The player will begin in the upper-left of the field, and the player’s path is represented by \*.

  ```js
  const myField = new Field([
  	["*", "░", "O"],
  	["░", "O", "░"],
  	["░", "^", "░"],
  ]);

  // Output:
  *░O
  ░O░
  ░^░

  ```

- Your game should be playable by users. In order to facilitate this, build out the following behavior:

  - When a user runs `main.js`, they should be prompted for input and be able to indicate which direction they’d like to `move`.
  - After entering an instruction, the user should see a printed result of their current field map with the tiles they have visited marked with the player's path. They should be prompted for their next move.

[🔝 Back to Table of Contents](#table-of-contents)

### Game Rules:

**1. Wins by finding their hat.**

**2. Loses by landing on (and falling in) a hole.**

**3. Loses by attempting to move “outside” the field.**

**When any of the above occur, let the user know and end the game.**

[🔝 Back to Table of Contents](#table-of-contents)

---

## JavaScript Assessment Rubric

1. Class Method ที่ควรมีครบ: (2 pts ครบถ้วน | 1 pts มีไม่ครบ | 0 pts ไม่มีเลย)

- constructor
- moveRight
- moveLeft
- moveUp
- moveDown

2. Print Map (2 pts ครบถ้วน | 1 pts มีไม่ครบ | 0 pts ไม่มีเลย)

3. เดินได้ถูกต้อง & Update Map ได้ถูกต้อง (2 pts ครบถ้วน | 1 pts มีไม่ครบ | 0 pts ไม่มีเลย)

- เลี้ยวซ้าย
- เลี้ยวขวา
- ขึ้น
- ลง

4. Game Logic: (2 pts ครบถ้วน | 1 pts มีไม่ครบ | 0 pts ไม่มีเลย)

- Wins by finding their hat
- Loses by landing on (and falling in) a hole.
- Attempts to move "outside" the field. (Warning message when actor attempts to move outside)

5. มี Random ตำแหน่ง: (2 pts ครบถ้วน | 1 pts มีไม่ครบ | 0 pts ไม่มีเลย)

- holes
- hat
- actor

6. Thinking process & Breakdown the steps of a thinking process (5 pts ครบถ้วน | 3 pts มีไม่ครบ | 0 pts ไม่มีเลย)

[🔝 Back to Table of Contents](#table-of-contents)

---

**Please Write Down Your Thinking Process Below:**

---

### Thinking Process
graph TD
    subgraph "ส่วนที่ 1: การเตรียมการและสร้างแผนที่ (Initialization)"
        A(🏁 เริ่มโปรแกรม) --> B["1. Import Modules & สร้างฟังก์ชัน<br/>(prompt, clear)"];
        B --> C["2. กำหนดค่าคงที่ของเกม<br/>(hat, hole, fieldCharacter, pathCharacter)"];
        C --> D["3. เรียกใช้ static method<br/>`Field.generateField(height, width, percentage)`"];

        subgraph "กระบวนการย่อย: generateField"
            D1(เริ่มต้น) --> D2["สร้าง Grid ว่างตามขนาดที่กำหนด"];
            D2 --> D3["วนลูปทุกช่องใน Grid<br/>สุ่มเพื่อใส่ `fieldCharacter` (░) หรือ `hole` (O)"];
            D3 --> D4["สุ่มตำแหน่งสำหรับ `hat` (^)"];
            D4 --> D5{"ตำแหน่ง `hat` อยู่ที่จุดเริ่มต้น (0,0) หรือไม่?"};
            D5 -- "ใช่ (Yes)" --> D4;
            D5 -- "ไม่ใช่ (No)" --> D6["กำหนด `hat` (^) ลงในตำแหน่งนั้น"];
            D6 --> D7(คืนค่าแผนที่ (2D Array) ที่สร้างเสร็จ);
        end

        D --> D1;
        D7 --> E["4. สร้าง Instance จาก Field Class<br/>`new Field(map)`<br/>กำหนดตำแหน่งผู้เล่นเริ่มต้นที่ (0,0)"];
    end

    subgraph "ส่วนที่ 2: ลูปของเกม (Main Game Loop)"
        E --> F{"<-- เริ่มต้น `runGame()` Loop -->"};
        F --> G["5. ล้างหน้าจอและแสดงผลแผนที่ปัจจุบัน<br/>`clear()` และ `print()`"];

        G --> H["6. รอรับอินพุตจากผู้เล่น<br/>`askQuestion()`"];
        subgraph "กระบวนการย่อย: askQuestion"
            H1(เริ่มต้น) --> H2{"รับค่าจาก `prompt()`<br/>(u, d, l, r)"};
            H2 --> H3{"อินพุตถูกต้องหรือไม่?"};
            H3 -- "ไม่ใช่ (No)" --> H4["แสดงข้อความเตือน<br/>'Invalid Input'"];
            H4 --> H2;
            H3 -- "ใช่ (Yes)" --> H5["อัปเดตตำแหน่งผู้เล่น<br/>(this.locationX, this.locationY)"];
            H5 --> H6(จบการรับอินพุต);
        end
        H --> H1;
        H6 --> I["7. ตรวจสอบสถานะของเกม"];
    end

    subgraph "ส่วนที่ 3: การตรวจสอบเงื่อนไขและจบเกม (Game Logic & End)"
        I --> J{"8. ผู้เล่นเดินออกนอกขอบเขตหรือไม่?<br/>`isInBounds()`"};
        J -- "ใช่ (Yes)" --> End1["แสดงข้อความ: แพ้ (นอกขอบเขต)<br/>จบ Loop"];

        J -- "ไม่ใช่ (No)" --> K{"9. ผู้เล่นตกหลุมหรือไม่?<br/>`isHole()`"};
        K -- "ใช่ (Yes)" --> End2["แสดงข้อความ: แพ้ (ตกหลุม)<br/>จบ Loop"];

        K -- "ไม่ใช่ (No)" --> L{"10. ผู้เล่นเจอหมวกหรือไม่?<br/>`isHat()`"};
        L -- "ใช่ (Yes)" --> End3["แสดงข้อความ: ชนะ!<br/>จบ Loop"];

        L -- "ไม่ใช่ (No)" --> M{"11. ตำแหน่งใหม่เป็นช่องว่าง (░) หรือไม่?"};
        M -- "ใช่ (Yes)" --> N["12. ✅ อัปเดตแผนที่ด้วยเส้นทาง (*)"];
        M -- "ไม่ใช่ (No) - เป็นเส้นทางเดิม" --> F;
        N --> F;

        End1 --> Z(👋 จบโปรแกรม);
        End2 --> Z;
        End3 --> Z;
    end


_Notes:_<br>
_- You can attach flowcharts, diagrams, and images as needed._<br>
_- The purpose of this section is not to explain your code but rather to convey your thoughts and ideas._

[🔝 Back to Table of Contents](#table-of-contents)
