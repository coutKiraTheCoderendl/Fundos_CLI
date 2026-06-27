#!/usr/bin/env node 
// #!/usr/bin/env node is a shebang line that allows the script to be executed as a command-line tool.

//ADD MORE QUESTIONS AS WELL AS THE SUGGESTIONS FROM CLAUDE TO RANDOMIZE QUESTIONS!

import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';

let mainCharacter;

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function hello() {
    const rainbowTitle = chalkAnimation.rainbow(
        'DO YOU KNOW YOUR FUNDOS, BOY? \n'
    );

    await sleep();
    rainbowTitle.stop();

    console.log(`
    ${chalk.bgBlue('What is at stake?')}
    This is a personal CLI tool that I made to keep track of what I had learned.
    From reading and researching on the company PC (thank you, ECE),
    To being on my phone and watching YouTube/Instagram videos,
    To being on my own PC and doing hands-on stuff (like this project!)
    Right now, I am using the Fireship tutorial on YouTube as a guide.
    Hopefully, in the future, you are able to make things on your own, too.

    Topics include: BSOD error codes, run and Linux commands, and of course,
    CpE Fundos!

    This CLI tool serves as not only a way to keep track of my knowledge,
    but also a way to practice coding AND to refresh my memory on what I have learned.
    Keep picking up your sword.
    Keep up the good work.
    Observe consistency.
    Go be Legendary.
    `);
}


async function handleAnswer(isCorrect) {
        const spinner = createSpinner('Verifying response...').start();
        await sleep();

        if (isCorrect) {
            spinner.success({ text: `Well done, ${mainCharacter}!` });
        } else {
            spinner.error({ text: `Try again, ${mainCharacter}!` });
            process.exit(1);
        }
    }

async function whoYou() {
    const answers = await inquirer.prompt({
        name: 'mainCharacter',
        type: 'input',
        message: 'Identify yourself.',
        default() {
            return 'Character';
        },
    });
    mainCharacter = answers.mainCharacter;
}

async function question1() {
    const answers = await inquirer.prompt({
        name: 'question_1',
        type: 'select',
        message: 'What does the BSOD error code IRQL_NOT_LESS_OR_EQUAL (0x0000000A) mean?',
        choices: [
            'It indicates that a system process or driver attempted to access a memory location without proper authorization.',
            'It is a RAM issue and it means the system has run out of memory.',
            'It signifies a hardware/component failure.',
        ],
    });

    return handleAnswer(
        answers.question_1 ===
            'It indicates that a system process or driver attempted to access a memory location without proper authorization.'
    );
}

//sample question 2 only haha
async function question2() {
    const answers = await inquirer.prompt({
        name: 'question_2',
        type: 'select',
        message: 'What do you like most in a woman?',
        choices: [
            'Intelligence, sense of humor, personality.',
            'Kindness, empathy, passion.',
            'boobs',
        ],
    });

    return handleAnswer(
        answers.question_2 ===
            'boobs'
    );
}

function legendary() {
    console.clear();
    const msg = `Congratulations, ${mainCharacter}!`;
    figlet(msg, (err, data) => {
        console.log(gradient.pastel.multiline(data));
    console.log(`
         You have proven yourself knowledgeable. 
         Do not stop here; keep learning and keep being Legendary!\n`);
    })
}

await hello();
await whoYou();
await question1();
await question2();
await legendary();