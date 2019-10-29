export interface Quiz {
    area: string; // the category of the quiz
    questions: Question[]; // the array of questions for the quiz
}

export interface Question{
    question: string; // the question of the quiz
    choices: string[]; // the multiple choices of the question
    answer: number; //index of the answer choice array
}
