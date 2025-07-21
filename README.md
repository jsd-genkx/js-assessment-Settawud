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
### **Thinking Process: Find Your Hat**

นี่คือลำดับความคิดของผมในการสร้างเกม "Find Your Hat" ตั้งแต่เริ่มต้นจนจบโปรเจกต์ครับ ผมจะอธิบายทีละขั้นตอนเหมือนกับที่ผมคิดและลงมือทำจริงๆ

#### **Step 1: "เราจะสร้างอะไร?" \- ทำความเข้าใจโจทย์และตั้งค่าโปรเจกต์**

ก่อนจะเริ่มเขียนโค้ดสักบรรทัด ผมต้องเข้าใจเป้าหมายสุดท้ายก่อน

1. **เป้าหมายหลัก:** สร้างเกมบน Terminal ให้ผู้เล่น (👣) เดินในแผนที่ (🟩) เพื่อตามหาหมวก (👒) โดยต้องคอยหลบหลุม (⚫) และห้ามเดินตกขอบแผนที่  
2. **เครื่องมือ:** โปรเจกต์นี้ใช้ Node.js และต้องรับอินพุตจากผู้เล่นผ่านคีย์บอร์ด  
3. **ตั้งค่าพื้นฐาน (Setup):**  
   * Clone โปรเจกต์จาก GitHub Classroom  
   * เปิด Terminal แล้วรัน npm install เพื่อลง prompt-sync และ clear-screen  
   * เปิดไฟล์ package.json แล้วเปลี่ยนชื่อ author ให้เป็นชื่อของผม  
   * รัน npm run dev เพื่อให้แน่ใจว่าโปรเจกต์เริ่มต้นทำงานได้ไม่มีปัญหา

#### **Step 2: "สร้างโลกของเกม" \- สร้าง Class Field แบบง่ายที่สุด**

ผมจะยังไม่เริ่มทำอะไรที่ซับซ้อน แต่จะสร้าง "โครง" ของเกมขึ้นมาก่อน โดยใช้แผนที่แบบตายตัว (Hard-coded) เพื่อให้ทดสอบส่วนอื่นๆ ได้ง่าย

1. **สร้าง Class Field:** นี่คือหัวใจของเกมที่จะเก็บข้อมูลทุกอย่างไว้  
2. **constructor(field):**  
   * สร้าง constructor ที่รับ Parameter แค่ตัวเดียวคือ field (ซึ่งเป็น Array 2 มิติ) ตามที่โจทย์สั่งเป๊ะๆ  
   * เก็บแผนที่ไว้ใน this.field  
   * **คำถาม:** แล้วผู้เล่นจะเริ่มตรงไหน? โจทย์บอกว่าเริ่มที่มุมบนซ้าย (0,0) งั้นผมจะกำหนดค่าเริ่มต้น this.positionRow \= 0 และ this.positionCol \= 0 ไปก่อนเลย  
   * สุดท้าย ผมจะกำหนดให้ช่อง (0,0) ในแผนที่เป็นตัวผู้เล่น (👣) ด้วยคำสั่ง this.field\[0\]\[0\] \= pathCharacter;  
3. **สร้างเมธอด print():**  
   * เมธอดนี้ง่ายมาก แค่วนลูป (map แล้ว join) เพื่อเปลี่ยน Array 2 มิติให้กลายเป็น String สวยๆ แล้ว console.log ออกมา  
   * เพิ่ม clear() เข้าไปที่บรรทัดแรกของเมธอดนี้ เพื่อให้หน้าจอดูสะอาดทุกครั้งที่แสดงผลใหม่

#### **Step 3: "ทำให้เกมมีชีวิต" \- การเคลื่อนที่และกฎของเกม**

ตอนนี้เรามีแผนที่แล้ว ต่อไปคือการทำให้ผู้เล่นเดินและมีปฏิสัมพันธ์กับเกมได้

1. **แยกเมธอดเคลื่อนที่:** เพื่อให้ตรงตาม Rubric และทำให้โค้ดสะอาด ผมจะสร้างเมธอดสำหรับการเคลื่อนที่แต่ละทิศทางแยกกันเลย:  
   * moveUp(): this.positionRow \-= 1;  
   * moveDown(): this.positionRow \+= 1;  
   * moveLeft(): this.positionCol \-= 1;  
   * moveRight(): this.positionCol \+= 1;  
2. **สร้างเมธอด askQuestion():**  
   * เมธอดนี้จะทำหน้าที่รับอินพุตจากผู้เล่นด้วย prompt()  
   * ใช้ do...while loop เพื่อให้แน่ใจว่าผู้เล่นจะใส่แค่ 'w', 'a', 's', 'd' เท่านั้น ถ้าใส่ผิดก็จะวนถามใหม่  
   * ใช้ switch...case เพื่อเรียกเมธอดเคลื่อนที่ที่ถูกต้องตามอินพุตที่ได้รับ (เช่น ถ้ากด 'w' ก็เรียก this.moveUp())  
3. **สร้าง Game Loop ใน playGame():**  
   * ใช้ while (playing) loop เพื่อให้เกมดำเนินไปเรื่อยๆ  
   * **ลำดับการทำงานใน Loop สำคัญมาก\!** ผมคิดตามนี้:  
     1. print(): แสดงแผนที่ก่อนเลย  
     2. askQuestion(): ถามผู้เล่นว่าจะเดินไปไหน แล้วตำแหน่งของผู้เล่นจะถูกอัปเดต  
     3. **ตรวจสอบเงื่อนไขแพ้/ชนะ (สำคัญที่สุด):**  
        * if (\!this.isInBounds()): **ต้องเช็คอันนี้ก่อนเสมอ\!** เพราะถ้าผู้เล่นเดินตกขอบแล้วเราไปเช็คช่องในแผนที่ โปรแกรมจะพยายามอ่าน Array ที่ตำแหน่งติดลบ (field\[-1\]) และจะแครชทันที  
        * else if (currentTile \=== hole): ถ้าไม่ตกขอบ ก็เช็คว่าตกหลุมมั้ย
        * else if (currentTile \=== hat): ถ้าไม่ตกหลุม ก็เช็คว่าเจอหมวกรึเปล่า
        * else: ถ้าไม่เข้าเงื่อนไขไหนเลย แสดงว่าเป็นช่องว่าง ก็อัปเดตแผนที่ด้วยรอยเท้า (👣)

#### **Step 4: "เพิ่มความท้าทาย" \- การสุ่มทุกอย่าง\!**

ตอนนี้เกมเล่นได้แล้ว แต่แผนที่ยังตายตัว ผมจะทำให้ทุกอย่างเป็นการสุ่มเพื่อให้เกมสนุกขึ้น

1. **สร้าง static generateField():**  
   * ใช้ static เพราะเมธอดนี้ควรจะเรียกใช้ได้เลยโดยไม่ต้องสร้าง instance ของ Field ก่อน (Field.generateField(...))  
   * **ขั้นตอนการสุ่ม:**  
     1. สร้างแผนที่ว่างๆ แล้วเติมด้วยพื้นหญ้า (🟩) กับหลุม (⚫) ตามเปอร์เซ็นต์ที่กำหนด  
     2. สุ่มตำแหน่งของ **หมวก (👒)** แล้ววางลงไป  
     3. สุ่มตำแหน่งของ **ผู้เล่น (👣)** โดยใช้ do...while loop เพื่อการันตีว่าจะไม่สุ่มได้ตำแหน่งที่เป็นหลุมหรือหมวกเด็ดขาด  
     4. สุดท้าย return field ที่เป็น Array 2 มิติออกมา  
2. **แก้ปัญหา "เกมจะรู้ตำแหน่งเริ่มต้นที่สุ่มมาได้อย่างไร?"**  
   * ตอนนี้ generateField() คืนค่ามาแค่แผนที่ แต่ constructor ไม่รู้ว่า 👣 ที่ถูกสุ่มไปนั้นอยู่ที่พิกัดไหน  
   * **ทางออก:** สร้างเมธอด findStartPosition() ขึ้นมา  
   * ใน constructor หลังจากที่รับ field มาแล้ว จะเรียก this.findStartPosition() ทันที  
   * เมธอดนี้จะทำหน้าที่วน for loop 2 ชั้นเพื่อ "สแกน" หาว่า 👣 อยู่ที่ไหนในแผนที่ พอเจอก็จะกำหนด this.positionRow และ this.positionCol ให้เป็นตำแหน่งนั้น  
   * วิธีนี้ทำให้ constructor ยังคงรับแค่ field ตัวเดียว ซึ่ง **ถูกต้องตามโจทย์ 100%**

#### **Step 5: "ตรวจสอบและส่งงาน" \- ประกอบร่างและเขียน Flowchart**

สุดท้าย ผมจะนำทุกส่วนที่ทำมาประกอบกันในไฟล์ main.js และตรวจสอบความถูกต้องทั้งหมดอีกครั้ง

* const myField \= new Field(Field.generateField(10, 10));  
* myField.playGame();

จากนั้น ผมจะเขียนสรุปกระบวนการคิดทั้งหมดนี้ลงใน Flowchart เพื่อให้เห็นภาพรวมได้ง่ายและชัดเจนที่สุด แล้วนำไปใส่ในไฟล์ README.md เป็นอันเสร็จสิ้นโปรเจกต์ครับ\!

####Flow Chart

graph TD
    subgraph "ส่วนที่ 1: การเตรียมการและสร้างแผนที่ (Initialization)"
        A(🏁 เริ่มโปรแกรม) --> B["1. Import Modules & สร้างฟังก์ชัน<br/>(prompt, clear)"];
        B --> C["2. กำหนดค่าคงที่ของเกม<br/>(hat, hole, fieldCharacter, pathCharacter)"];
        C --> D["3. เรียกใช้ static method<br/>`Field.generateField(...)`"];
        
        subgraph "กระบวนการย่อย: generateField"
            D1(เริ่มต้น) --> D2["สร้าง Grid ว่างและเติมด้วย<br/>หญ้า (🟩) และหลุม (⚫)"];
            D2 --> D3["สุ่มตำแหน่งและวางหมวก (👒)"];
            D3 --> D4["สุ่มตำแหน่งและวางผู้เล่น (👣)<br/>(ตรวจสอบว่าไม่ใช่หลุมหรือหมวก)"];
            D4 --> D5(คืนค่าแผนที่ (2D Array) ที่สร้างเสร็จ);
        end

        D --> D1;
        D5 --> E["4. สร้าง Instance จาก Field Class<br/>`new Field(map)`"];
        E --> F["5. ใน Constructor, ค้นหาตำแหน่งเริ่มต้น<br/>ของผู้เล่นด้วย `findStartPosition()`"];
    end

    subgraph "ส่วนที่ 2: ลูปของเกม (Main Game Loop)"
        F --> G{"<-- เริ่มต้น `playGame()` Loop -->"};
        G --> H["6. ล้างหน้าจอและแสดงผลแผนที่ปัจจุบัน<br/>`clear()` และ `print()`"];
        
        H --> I["7. รอรับอินพุตและเคลื่อนที่<br/>`askQuestion()` และ `move...()`"];
        
        I --> J{"8. ตรวจสอบ: ผู้เล่นเดินออกนอกขอบเขต?<br/>`isInBounds()`"};
        J -- "ใช่ (Yes)" --> End1["แสดงข้อความ: แพ้ (นอกขอบเขต)<br/>จบ Loop"];
        
        J -- "ไม่ใช่ (No)" --> K{"9. ตรวจสอบ: ผู้เล่นตกหลุม?<br/>(อ่านค่า `currentTile`)"};
        K -- "ใช่ (Yes)" --> End2["แสดงข้อความ: แพ้ (ตกหลุม)<br/>จบ Loop"];

        K -- "ไม่ใช่ (No)" --> L{"10. ตรวจสอบ: ผู้เล่นเจอหมวก?<br/>(อ่านค่า `currentTile`)"};
        L -- "ใช่ (Yes)" --> End3["แสดงข้อความ: ชนะ!<br/>จบ Loop"];

        L -- "ไม่ใช่ (No)" --> M["11. ✅ เล่นต่อ:<br/>อัปเดตแผนที่ด้วยรอยเท้า (👣)"];
        M --> G;

        End1 --> Z(👋 จบโปรแกรม);
        End2 --> Z;
        End3 --> Z;
    end
_Notes:_<br>
_- You can attach flowcharts, diagrams, and images as needed._<br>
_- The purpose of this section is not to explain your code but rather to convey your thoughts and ideas._

[🔝 Back to Table of Contents](#table-of-contents)
