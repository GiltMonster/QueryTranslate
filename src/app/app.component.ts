import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { QuestionsService } from './services/questions.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  constructor(
    private questionsService: QuestionsService
  ) { }

  ngOnInit(): void {
      this.questionsService.getQuestions().subscribe((data) => {
        console.log(data);
      }
    );
  }


}
