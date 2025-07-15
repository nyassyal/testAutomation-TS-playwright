let students = new Map<string, number>()

    students.set(`Alice`, 85);
    students.set(`Bob`, 90);
    students.set(`Charlie`, 78);
    students.set(`David`, 92);
    students.set(`Eve`, 88);
    students.set(`Frank`, 80);
    students.set(`Grace`, 95);
    students.set(`Heidi`, 87);

    for(let [k,v] of students.entries()){
        if (v % 2 === 0) {
            console.log(`Students with even scores: ${k}`);
        }
    }