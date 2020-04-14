import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  public text = [
  "What effects will anthropogenic climate change have on complex ecological systems? What can we as humans do to manage these changes and preserve biodiversity? What computational tools can we use to find these answers?",
  "As an Environment Ph.D. student at Duke University's Nicholas School of the Environment, and with the support of the <a 'href=https://sites.nicholas.duke.edu/clarklab/'>Clark Lab</a>, I am exploring my academic interests in data analysis, ecological modeling, and computational problem solving. My current project investigates the effects of climate change (especially drought) on rare antelope populations in the Kruger National Park in South Africa. I hope to use computational tools like <a href='https://cran.r-project.org/web/packages/gjam/vignettes/gjamVignette.html'>GJAM</a> to explore the changing structures of these populations, and to predict how they will react to ongoing global changes.",
  "Check out the tabs above to learn more about myself; my work; and my interests, both academic and extra-curricular."
  ]

  constructor() { }

  ngOnInit() {
  }

}
