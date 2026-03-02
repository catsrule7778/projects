let words = []; 
async function load_words() {
    const r = await fetch('word_list.txt');
    const text = await r.text();
    words = text.split('\n');

    // console.log(words[0]);
}

load_words();

function check(word, answer) {
    let output = ['G', 'G', 'G', 'G', 'G']; 
    const c = {'a':0,'b':0,'c':0,'d':0,'e':0,'f':0,'g':0,'h':0,'i':0,'j':0,'k':0,'l':0,'m':0,'n':0,'o':0,'p':0,'q':0,'r':0,'s':0,'t':0,'u':0,'v':0,'w':0,'x':0,'y':0,'z':0}; 

    for (let char of answer) {
        c[char] += 1;
    }

    for (let i = 0; i < 5; i++) {
        if (word[i] == answer[i]) {
            output[i] = 'Gr'; 
            c[word[i]] -= 1
        }
    }

    for (let i = 0; i < 5; i++) {
        if (c[word[i]] > 0 && output[i] !== 'Gr') {
            output[i] = 'Y';
            c[word[i]] -= 1; 
        }
    }

    return output; 

}


function check2(answer, line) {
    for (let word of words) {
        if (check(word, answer).join('') == line.join('')) {
            return {word, found: true};
        }
    }
    return {word : 'Not Found', found: false};
}


function check3(answer, pattern) {
    let output = []; 
    for (let line of pattern) {
        let res = check2(answer, line);

        let word = res.word;
        let found = res.found; 

        if (found) {
            output.push(word);
        }
        else {
            return {works: false, ans: []};
        }
    }
    return {works: true, ans: output};
}

const input = document.getElementById('input_word');
const button = document.getElementById('load_patterns');
const results = document.getElementById('results');



let pattern1 = [['G', 'Y', 'G', 'Y', 'G'],
            ['Y', 'G', 'Y', 'G', 'Y'],
            ['G', 'Y', 'G', 'Y', 'G'],
            ['Y', 'G', 'Y', 'G', 'Y'],
            ['G', 'Y', 'G', 'Y', 'G'],
            ['Y', 'G', 'Y', 'G', 'Y']];

let amongus1 = [['G', 'G', 'G', 'G', 'G'],
            ['G', 'Y', 'Y', 'Y', 'G'],
            ['G', 'Y', 'Gr', 'Gr', 'G'],
            ['Gr', 'Y', 'Y', 'Y', 'G'],
            ['G', 'Y', 'G', 'Y', 'G'],
            ['Gr', 'Gr', 'Gr', 'Gr', 'Gr']];

let amongus2 = [['G', 'Y', 'Y', 'Y', 'Y'],
            ['Y', 'Y', 'Gr', 'Gr', 'Gr'],
            ['Y', 'Y', 'Gr', 'Gr', 'Gr'],
            ['Y', 'Y', 'Y', 'Y', 'Y'],
            ['G', 'Y', 'Y', 'Y', 'Y'],
            ['G', 'Y', 'G', 'G', 'Y']];

let smiley = [['Y', 'Y', 'Y', 'Y', 'Y'],
            ['Y', 'Gr', 'Y', 'Gr', 'Y'],
            ['Y', 'Y', 'Y', 'Y', 'Y'],
            ['Gr', 'Y', 'Y', 'Y', 'Gr'],
            ['Y', 'Gr', 'Gr', 'Gr', 'Y'],
            ['Y', 'Y', 'Y', 'Y', 'Y']];

let smiley2 = [['G', 'G', 'G', 'G', 'G'],
            ['G', 'Y', 'G', 'Y', 'G'],
            ['G', 'G', 'G', 'G', 'G'],
            ['Y', 'G', 'G', 'G', 'Y'],
            ['G', 'Y', 'Y', 'Y', 'G'],
            ['G', 'G', 'G', 'G', 'G']];

let smiley3 = [['G', 'G', 'G', 'G', 'G'],
            ['G', 'Gr', 'G', 'Gr', 'G'],
            ['G', 'G', 'G', 'G', 'G'],
            ['Gr', 'G', 'G', 'G', 'Gr'],
            ['G', 'Gr', 'Gr', 'Gr', 'G'],
            ['G', 'G', 'G', 'G', 'G']];

let smiley4 = [['G', 'Y', 'G', 'Y', 'G'],
            ['G', 'Y', 'G', 'Y', 'G'],
            ['G', 'G', 'G', 'G', 'G'],
            ['Y', 'G', 'G', 'G', 'Y'],
            ['Y', 'G', 'G', 'G', 'Y'],
            ['G', 'Y', 'Y', 'Y', 'G']];


let smiley5 = [['G', 'Gr', 'G', 'Gr', 'G'],
            ['G', 'Gr', 'G', 'Gr', 'G'],
            ['G', 'G', 'G', 'G', 'G'],
            ['Gr', 'G', 'G', 'G', 'Gr'],
            ['Gr', 'G', 'G', 'G', 'Gr'],
            ['G', 'Gr', 'Gr', 'Gr', 'G']];

let smiley6 = [['Y', 'Gr', 'Y', 'Gr', 'Y'],
            ['Y', 'Gr', 'Y', 'Gr', 'Y'],
            ['Y', 'Y', 'Y', 'Y', 'Y'],
            ['Gr', 'Y', 'Y', 'Y', 'Gr'],
            ['Gr', 'Y', 'Y', 'Y', 'Gr'],
            ['Y', 'Gr', 'Gr', 'Gr', 'Y']];





let star1 = [['G', 'G', 'Y', 'G', 'G'],
            ['G', 'Y', 'Y', 'Y', 'G'],
            ['Y', 'Y', 'Y', 'Y', 'Y'],
            ['G', 'Y', 'Y', 'Y', 'G'],
            ['G', 'G', 'Y', 'G', 'G'],
            ['G', 'G', 'G', 'G', 'G']];

let star2 = [['G', 'G', 'Y', 'G', 'G'],
            ['G', 'Y', 'Y', 'Y', 'G'],
            ['Y', 'Y', 'Gr', 'Y', 'Y'],
            ['G', 'Y', 'Y', 'Y', 'G'],
            ['G', 'G', 'Y', 'G', 'G'],
            ['G', 'G', 'G', 'G', 'G']];

let star3 = [['G', 'G', 'Y', 'G', 'G'],
            ['G', 'Y', 'Gr', 'Y', 'G'],
            ['Y', 'Gr', 'Gr', 'Gr', 'Y'],
            ['G', 'Y', 'Gr', 'Y', 'G'],
            ['G', 'G', 'Y', 'G', 'G'],
            ['G', 'G', 'G', 'G', 'G']];

let star4 = [['G', 'G', 'Gr', 'G', 'G'],
            ['G', 'Gr', 'Gr', 'Gr', 'G'],
            ['Gr', 'Gr', 'Gr', 'Gr', 'Gr'],
            ['G', 'Gr', 'Gr', 'Gr', 'G'],
            ['G', 'G', 'Gr', 'G', 'G'],
            ['G', 'G', 'G', 'G', 'G']];

let star5 = [['G', 'G', 'Gr', 'G', 'G'],
            ['G', 'Gr', 'Y', 'Gr', 'G'],
            ['Gr', 'Y', 'Y', 'Y', 'Gr'],
            ['G', 'Gr', 'Y', 'Gr', 'G'],
            ['G', 'G', 'Gr', 'G', 'G'],
            ['G', 'G', 'G', 'G', 'G']];


let square1 = [['G', 'G', 'G', 'G', 'G'],
            ['G', 'Y', 'Y', 'Y', 'G'],
            ['G', 'Y', 'G', 'Y', 'G'],
            ['G', 'Y', 'Y', 'Y', 'G'],
            ['G', 'G', 'G', 'G', 'G'],
            ['G', 'G', 'G', 'G', 'G']];

let square2 = [['G', 'G', 'G', 'G', 'G'],
            ['G', 'Y', 'Y', 'Y', 'G'],
            ['G', 'Y', 'Gr', 'Y', 'G'],
            ['G', 'Y', 'Y', 'Y', 'G'],
            ['G', 'G', 'G', 'G', 'G'],
            ['G', 'G', 'G', 'G', 'G']];

let square3 = [['G', 'G', 'G', 'G', 'G'],
            ['G', 'Gr', 'Gr', 'Gr', 'G'],
            ['G', 'Gr', 'Y', 'Gr', 'G'],
            ['G', 'Gr', 'Gr', 'Gr', 'G'],
            ['G', 'G', 'G', 'G', 'G'],
            ['G', 'G', 'G', 'G', 'G']];

let square4 = [['Y', 'Y', 'Y', 'Y', 'Y'],
            ['Y', 'G', 'G', 'G', 'Y'],
            ['Y', 'G', 'Gr', 'G', 'Y'],
            ['Y', 'G', 'G', 'G', 'Y'],
            ['Y', 'Y', 'Y', 'Y', 'Y'],
            ['G', 'G', 'G', 'G', 'G']];

let square5 = [['Y', 'Y', 'Y', 'Y', 'Y'],
            ['Y', 'Gr', 'G', 'Gr', 'Y'],
            ['Y', 'G', 'Gr', 'G', 'Y'],
            ['Y', 'Gr', 'G', 'Gr', 'Y'],
            ['Y', 'Y', 'Y', 'Y', 'Y'],
            ['G', 'G', 'G', 'G', 'G']];

let square6 = [['Y', 'Y', 'Y', 'Y', 'Y'],
            ['Y', 'G', 'Gr', 'G', 'Y'],
            ['Y', 'Gr', 'G', 'Gr', 'Y'],
            ['Y', 'G', 'Gr', 'G', 'Y'],
            ['Y', 'Y', 'Y', 'Y', 'Y'],
            ['G', 'G', 'G', 'G', 'G']];

let square7 = [['Y', 'Y', 'Y', 'Y', 'Y'],
            ['Y', 'Gr', 'G', 'Gr', 'Y'],
            ['Y', 'Gr', 'G', 'Gr', 'Y'],
            ['Y', 'Gr', 'G', 'Gr', 'Y'],
            ['Y', 'Y', 'Y', 'Y', 'Y'],
            ['G', 'G', 'G', 'G', 'G']];

let square8 = [['Y', 'Y', 'Y', 'Y', 'Y'],
            ['Y', 'G', 'Gr', 'G', 'Y'],
            ['Y', 'G', 'Gr', 'G', 'Y'],
            ['Y', 'G', 'Gr', 'G', 'Y'],
            ['Y', 'Y', 'Y', 'Y', 'Y'],
            ['G', 'G', 'G', 'G', 'G']];

let bullseye1 = [['G', 'Y', 'Y', 'Y', 'G'],
            ['Y', 'G', 'G', 'G', 'Y'],
            ['Y', 'G', 'G', 'G', 'Y'],
            ['Y', 'G', 'G', 'G', 'Y'],
            ['G', 'Y', 'Y', 'Y', 'G'],
            ['G', 'G', 'G', 'G', 'G']];

let bullseye2 = [['G', 'Y', 'Y', 'Y', 'G'],
            ['Y', 'G', 'G', 'G', 'Y'],
            ['Y', 'G', 'Gr', 'G', 'Y'],
            ['Y', 'G', 'G', 'G', 'Y'],
            ['G', 'Y', 'Y', 'Y', 'G'],
            ['G', 'G', 'G', 'G', 'G']];

let bullseye3 = [['G', 'Gr', 'Gr', 'Gr', 'G'],
            ['Gr', 'G', 'G', 'G', 'Gr'],
            ['Gr', 'G', 'Gr', 'G', 'Gr'],
            ['Gr', 'G', 'G', 'G', 'Gr'],
            ['G', 'Gr', 'Gr', 'Gr', 'G'],
            ['G', 'G', 'G', 'G', 'G']];

let bullseye4 = [['G', 'Gr', 'Gr', 'Gr', 'G'],
            ['Gr', 'G', 'G', 'G', 'Gr'],
            ['Gr', 'G', 'Y', 'G', 'Gr'],
            ['Gr', 'G', 'G', 'G', 'Gr'],
            ['G', 'Gr', 'Gr', 'Gr', 'G'],
            ['G', 'G', 'G', 'G', 'G']];

let bullseye5 = [['G', 'Y', 'Y', 'Y', 'G'],
            ['Y', 'G', 'G', 'G', 'Y'],
            ['Y', 'G', 'Y', 'G', 'Y'],
            ['Y', 'G', 'G', 'G', 'Y'],
            ['G', 'Y', 'Y', 'Y', 'G'],
            ['G', 'G', 'G', 'G', 'G']];

let bullseye6 = [['G', 'Gr', 'Gr', 'Gr', 'G'],
            ['Gr', 'G', 'G', 'G', 'Gr'],
            ['Gr', 'G', 'G', 'G', 'Gr'],
            ['Gr', 'G', 'G', 'G', 'Gr'],
            ['G', 'Gr', 'Gr', 'Gr', 'G'],
            ['G', 'G', 'G', 'G', 'G']];

let loss1 = [['Gr', 'G', 'G', 'Y', 'Gr'],
            ['Gr', 'G', 'G', 'Y', 'Gr'],
            ['G', 'G', 'G', 'G', 'G'],
            ['Y', 'Gr', 'G', 'Gr', 'G'],
            ['Y', 'Gr', 'G', 'Y', 'Y'],
            ['G', 'G', 'G', 'G', 'G']];

let loss2 = [['Y', 'G', 'G', 'Gr', 'Y'],
            ['Y', 'G', 'G', 'Gr', 'Y'],
            ['G', 'G', 'G', 'G', 'G'],
            ['Gr', 'Y', 'G', 'Y', 'G'],
            ['Gr', 'Y', 'G', 'Gr', 'Gr'],
            ['G', 'G', 'G', 'G', 'G']];


let kangaroo1 = [['G', 'Y', 'G', 'G', 'G'],
            ['Y', 'Y', 'G', 'G', 'G'],
            ['G', 'Y', 'Y', 'G', 'G'],
            ['G', 'Y', 'Y', 'Y', 'G'],
            ['G', 'G', 'Y', 'G', 'Y'],
            ['G', 'Y', 'Y', 'G', 'G']];

let kangaroo2 = [['G', 'Gr', 'G', 'G', 'G'],
            ['Gr', 'Gr', 'G', 'G', 'G'],
            ['G', 'Gr', 'Gr', 'G', 'G'],
            ['G', 'Gr', 'Gr', 'Gr', 'G'],
            ['G', 'G', 'Gr', 'G', 'Gr'],
            ['G', 'Gr', 'Gr', 'G', 'G']];

let kangaroo3 = [['Y', 'Gr', 'Y', 'Y', 'Y'],
            ['Gr', 'Gr', 'Y', 'Y', 'Y'],
            ['Y', 'Gr', 'Gr', 'Y', 'Y'],
            ['Y', 'Gr', 'Gr', 'Gr', 'Y'],
            ['Y', 'Y', 'Gr', 'Y', 'Gr'],
            ['Y', 'Gr', 'Gr', 'Y', 'Y']];


let question1 = [['G', 'Gr', 'Gr', 'Gr', 'G'],
            ['Gr', 'G', 'G', 'G', 'Gr'],
            ['G', 'G', 'Gr', 'Gr', 'G'],
            ['G', 'G', 'Gr', 'G', 'G'],
            ['G', 'G', 'G', 'G', 'G'],
            ['G', 'G', 'Gr', 'G', 'G']];

let question2 = [['G', 'Y', 'Y', 'Y', 'G'],
            ['Y', 'G', 'G', 'G', 'Y'],
            ['G', 'G', 'Y', 'Y', 'G'],
            ['G', 'G', 'Y', 'G', 'G'],
            ['G', 'G', 'G', 'G', 'G'],
            ['G', 'G', 'Y', 'G', 'G']];

let blank = [['G', 'G', 'G', 'G', 'G'],
            ['G', 'G', 'G', 'G', 'G'],
            ['G', 'G', 'G', 'G', 'G'],
            ['G', 'G', 'G', 'G', 'G'],
            ['G', 'G', 'G', 'G', 'G'],
            ['G', 'G', 'G', 'G', 'G']];


let flower = [['G', 'G', 'Y', 'G', 'G'],
            ['G', 'Y', 'Gr', 'Y', 'G'],
            ['G', 'G', 'Y', 'G', 'G'],
            ['G', 'G', 'Gr', 'G', 'G'],
            ['Gr', 'G', 'Gr', 'G', 'Gr'],
            ['Gr', 'Gr', 'Gr', 'Gr', 'Gr']];




let patterns = [pattern1, amongus1, amongus2,
                question1, question2,
                flower,
                kangaroo1, kangaroo2, kangaroo3,
                smiley, smiley2, smiley3,smiley4,smiley5, smiley6,
                star1, star2, star3, star4, star5, square1, square2,
                square3, square4, square5, square6, square7, square8,
                bullseye1, bullseye2, bullseye3, bullseye4, bullseye5, bullseye6,
                loss1, loss2
                ];





button.addEventListener('click', () => {
    const input_word = input.value.trim()

    let output = [];

    output.push('<b>Possible for your word:</b><br>');

    for (let pattern of patterns) {
        const res = check3(input_word, pattern); 
        const works = res.works; 
        const ans = res.ans; 

        if (works) {
            output.push("<br>");
            let a = [['0', '0', '0', '0', '0'], ['0', '0', '0', '0', '0'], ['0', '0', '0', '0', '0'], ['0', '0', '0', '0', '0'], ['0', '0', '0', '0', '0'], ['0', '0', '0', '0', '0']];
            for (let i = 0; i < 6; i++) {
                for (let j = 0; j < 5; j++) {
                    if (pattern[i][j] == 'Gr') {
                        a[i][j] = '🟩';
                    }
                    else if (pattern[i][j] == 'Y') {
                        a[i][j] = '🟨';
                    }
                    else {
                        a[i][j] = '⬜';
                    }
                }
            }

            for (let i = 0; i < 6; i++) {
                let str = a[i].join('') + ans[i] + "<br>";
                output.push(str);
            }


        }

        results.innerHTML = output.join('');
        
    }



});




