import { Injectable } from '@angular/core';

interface Quiz{
    question: string;
    answer: { option: string, correct: boolean } [];
}

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  quizzes: Quiz[] = [
    {
      question: '1) Which of the following state has highest litaracy rate??',
      answer: [
        { option: 'Uttarpradesh', correct: false },
        { option: 'Karnataka', correct: false },
        { option: 'Kerala', correct: true },
        { option: 'Tripura', correct: false },
      ]
    },
    {
      question: 'Which state grows highest wheat?',
      answer: [
        { option: 'Punjab', correct: true },        
        { option: 'Karnataka', correct: false },
        { option: 'Tamilnadu', correct: false },
        { option: 'Uttarpradesh', correct: false },
      ]
    },
    {
      question: '_____ is Pink city of India.',
      answer: [
        { option: 'Jaipur', correct: true },
        { option: 'Bangalore', correct: false },
        { option: 'Hyderbad', correct: false },
        { option: 'Chennai', correct: false }
      ]
    },
    {
      question: 'Which city is called as silicon valley of India?',
      answer: [
        { option: 'Jaipur', correct: false },
        { option: 'Srinagar', correct: false },
        { option: 'Bangalore', correct: true },
        { option: 'Hyderbad', correct: false }
      ]
    },
    {
      question: 'Who is called as Father of Nation?',
      answer: [
        { option: 'Sardar vallabai patel', correct: false },
        { option: 'Mahatma Gandhi', correct: true },
        { option: 'Neharu', correct: false },
        { option: 'Bhagat singh', correct: false }
      ]
    },
    {
      question: 'Which of the following is known as Manchester of India?',
      answer: [
        { option: 'Chennai', correct: false },
        { option: 'Hyderbad', correct: false },
        { option: 'Ahmedabad', correct: true },
        { option: 'Bangalore', correct: false }
      ]
    },
    {
      question: 'Which is the largest state in India?',
      answer: [
        { option: 'Uttarpradesh', correct: false },
        { option: 'Karnataka', correct: false },
        { option: 'Rajastan', correct: true },
        { option: 'Andrapradesh', correct: false }
      ]
    },
    {
      question: 'Which is smallest state in India?',
      answer: [
        { option: 'Tripura.', correct: false },
        { option: 'Arunachalpradesh.', correct: false },
        { option: 'Goa.', correct: true },
        { option: 'Telangana.', correct: false },
      ]
    },
    {
      question: 'Which state has more forest area',
      answer: [
        { option: 'Karnataka', correct: false },
        { option: 'Telangana ', correct: false },
        { option: 'Madyapradesh', correct: true },
        { option: 'None of the above', correct: false }
      ]
    },
    {
      question: 'Which state produces highest rice crop?',
      answer: [
        { option: 'Karnataka', correct: false },
        { option: 'Tamilnadu', correct: false },
        { option: 'Westbengal', correct: true },
        { option: 'None of the above', correct: false }
      ]
    }
  ]



  getQuizzes(){
    return this.quizzes;
  }
}
