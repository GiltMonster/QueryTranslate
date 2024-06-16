import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { QuestionsService } from '../../services/questions.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(
    private questionsService: QuestionsService
  ) { }

  userQuestion: string = '';
  userQuery: string = '';
  answer: string = '';

  sendQuestion() {
    this.questionsService.sendQuestions(this.userQuestion).subscribe((data) => {
      this.answer = data.status;

    });
  }
}
