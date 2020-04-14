import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.sass']
})
export class ResearchComponent implements OnInit {

  constructor() { }
  projects = {
  	'graduate' : [{
  		'title' : 'Joint species distribution modeling',
  		'subtitle' : 'in the Kruger National Park, South Africa',
  		'body' : [
  			"The Kruger National Park is South Africa's oldest and largest national park, covering almost 2 million hectares along the country's northeastern border. Kruger has a diverse history of management plans, from intensive to adaptive; as well as a geographical gradient of rainfall, geology, elevation, temperature, and soil compositions across the park. As such, Kruger is ideal for studying the effects of global temperature change, rainfall variability, drought frequency, and management (of fires, water sources, and herbivore populations) on a diverse ecosystem driven by both top-down and bottom-up processes.",
  			"In particular, I am interested in the perennial problem of rare antelope. Kruger's water management strategy, along with a series of devastating droughts, has severely impacted the distribution and number of rare antelope (<i>Hippotragus equinus; H. niger; Taurotragus oryx; Damaliscus lunatus</i>) throughout the park. As well as impacting the ecology of the park, these antelopes' contributions to biodiversity are one of the large tourist draws of the park. With this project, I hope to assess species grouping patterns through the use of a <a href='https://cran.r-project.org/web/packages/gjam/vignettes/gjamVignette.html'>Generalized Joint Attribute Model</a> ('GJAM'), to understand how these animals interact with each other, other large herbivores, and the various environmental factors that drive spatial heterogeneity of forage and water availability across the park. "
		],
		'main_img' : "/assets/img/research/picture2_orig.png"
  	}],
  	'undergraduate' : [{
  		'title' : 'Dispersal-induced global extinction',
  		'subtitle' : 'in a coupled two-patch model under the Allee effect',
  		'body' : [
  			"From the summer of 2015 until the spring of 2017, I had the pleasure of working on a population dynamics research project with Drs. Leah Shaw and Junping Shi of the William & Mary mathematics department.  I started with an established system of two coupled logistic equations undergoing dispersal, which modeled the dynamics of a marine population (inspired by Chesapeake Bay oysters), and was given free reign to explore the dynamics. From there, I uncovered a rich dynamical architecture, and created diagrams exploring its steady-state and bifurcation structure in a qualitative fashion.  Currently, the paper is in preparation to be put forward for peer-review.",
  			"<i>my contribution:</i> The abstract, literature review, non-dimensionalization of the model in Section 2; Lyapunov proof in Section 3; and all results, diagrams, and analyses were authored by myself with guidance from my advisors.  The general model presented in Section 2 was devised by Leah Shaw and Junping Shi, and proofs from Section 3, Theorem 2 until the end of that section were constructed by Junping Shi.",
  			"<i>abstract:</i> 'Aquatic currents often create unequal patterns of dispersal from one population of organisms to another.  We study two  population patches coupled by this asymmetric dispersal, with population conserved during migration.  In addition, our coupled patches are subject to the positively density-dependent Allee effect:  Initial populations below an inherent threshold decline towards extinction, while those above the threshold persist towards their carrying capacity.  Analytically, we show that there are no periodic orbits, find a perpetually locally stable equilibrium at the extinction state (0,0), and define parameter ranges within which positive equilibria must occur.  Numerically, we explore one- and two-dimensional steady-state bifurcation structures, varying dispersal rates and the Allee threshold. At high Allee thresholds, we uncover large parameter ranges in which the extinction state is the only fixed point.  These regions have not been shown to occur with asymmetric dispersal rates with no mortality during migration; we therefore focus on the bifurcations that lead to this surprising extinction state. It is crucial to understand this behavior in efforts to restore endangered species that exhibit an Allee effect and asymmetric dispersal.'"

  		],
  		'main_img' : "/assets/img/research/fig2b_2.png"
  	},
  	{
  		'title' : "A Deeper Analysis of the FitzHugh-Nagumo Neuron Model:",
  		'subtitle' : "Bifurcations and Synchronization",
  		'body' : [
  			"As a final project for a mathematical modeling course I took in 2016, my partner Ellen Nguyen and I chose to study the dynamics of the well-known FitzHugh-Nagumo model of neurons and action potentials.  We derived the model and studied its phase portrait and the Hopf bifurcation that occurs at certain values of the incoming voltage into the neuron. We also discussed the biological relevancy of these Hopf bifurcations and examined the activity of coupled neurons using a modifed FitzHugh-Nagumo model.",
  			"<i>my contribution:</i> Given my expertise on the mathematical side, and Ms. Nguyen's expertise in neuron function and a broader background in neuroscience, our duties were well-defined.  Model derivation (Section 2), and bifurcation diagrams and analysis (Section 3) were authored by myself. My partner's contribution was in the introduction and motivation (Section 1), and discussion and future directions (Section 4)."
  			],
  		'main_img' : "/assets/img/research/prehopf.png"
  	},
  	{
  		'title' : "The Russian Movie Theater Project:",
  		'subtitle' : "Natural Language Processing & User Interface",
  		'body' : [
	  		"In the summer of 2016, I was afforded an incredible opportunity to study abroad for 6 weeks in St. Petersburg, Russia. While there, I conducted an interview with local resident Ekaterina Lebedeva for the <a href='http://mtp.blogs.wm.edu/'>Russian Movie Theater Project</a>, a project focused on the history of Russian cinema and native Russians' memories of Soviet movie theaters. On the project, we analyzed the structure of the interviewees' natural language in conjunction with more cultural references and underpinnings.",
	  		"<i>my contribution:</i> Along with conducting an interview in Russian, I worked in a group to transcribe and translate into English the interviews captured that summer.  After transcription, we used XML to 'tag' mentions of places, names, and films in the interviews for later natural language analysis.  This tagging was formerly a manual process, and was prone to many errors as most students weren't familiar with proper XML nesting formats. I approached my professors about semi-automating the process using Python, and they enthusiastically embraced the idea.  I worked with a fellow Russian student to code an interactive module to assist the researchers in this tagging and analysis, and built a web page from scratch to explain our process.",
  			"<a href='https://rmtp.wm.edu/meswift/'>my web page</a> -- <a href='http://mtp.blogs.wm.edu/2016/11/08/interview-with-lebedeva-ekaterina/'>my interview</a> -- <a href='http://mtp.blogs.wm.edu/'>about the project</a>  -- <a href='http://rmtp.obdurodon.org/'>computational module</a>  -- <a href='https://digitalarchive.wm.edu/handle/10288/1551'>digital archive</a> "
  		],
  		'main_img' : "/assets/img/research/russia.jpg"
  	}]
  }



  ngOnInit() {
  }

}
