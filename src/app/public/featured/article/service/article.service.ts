import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }

  getNewsSectionDataList():any[]{
    let data = [
      {
        id:1,
        imageUrl:'assets/images/news-image-1.png',
        hashTags:[
          'DEC 1, 2023',
          'Health',
          'Mental'
        ],
        title:'The Power of Self-Care: Nurturing Your Mental Health In The Age of AI Revolution',
        subTitle:"Embracing balance in a digital era: A guide to self-care practices that fortify mental health amidst the AI revolution.",
        article:`In the dynamic landscape of the 21st century, marked by the relentless progression of artificial intelligence, the significance of self-care in safeguarding mental well-being has never been more profound. "The Power of Self-Care: Nurturing Your Mental Health In The Age of AI Revolution" illuminates the pivotal role that self-care practices play in maintaining a harmonious equilibrium amidst the rapid advancements of the technological age. As artificial intelligence permeates every facet of our lives, from our workspaces to personal devices, individuals are confronted with unprecedented challenges that can impact mental health. This narrative underscores the transformative potential of self-care rituals, urging individuals to prioritize moments of reflection, mindfulness, and digital detoxification. By embracing the power of self-care, we empower ourselves to navigate the complexities of the AI revolution with resilience, fostering mental well-being as an integral component of our holistic health.`
      },
      {
        id:2,
        imageUrl:'assets/images/news-image-2.png',
        hashTags:[
          'SEPT 1, 2023',
          'TechTherapy',
          'MentalHealthTech'
        ],
        title:'Revolutionizing Mental Health: Technologys Role in Therapy and Support',
        subTitle:"Exploring the digital frontier: Embracing technological innovations that redefine therapy and support for a revolutionary leap in mental health care",
        article:`In the transformative landscape of mental health, technology assumes a central role, revolutionizing therapy and support mechanisms. The advent of teletherapy, empowered by video conferencing and online platforms, dismantles geographical barriers and extends mental health care accessibility. Mobile applications and digital tools provide users with unprecedented resources for daily mental health management, while artificial intelligence contributes personalized interventions through chatbots and tailored treatment algorithms. Online communities further enhance the support ecosystem, offering individuals a platform to share experiences and find solace. As technology reshapes the contours of mental health care, the challenge lies in navigating ethical considerations to ensure privacy and trust. Yet, the fusion of innovation and empathy stands as a testament to a future where mental well-being is not only accessible but profoundly transformed by the power of technology.`
      },
      {
        id:3,
        imageUrl:'assets/images/news-image-3.png',
        hashTags:[
          'AUG 22, 2023',
          'NatureTherapy  ',
          'MentalHealthNature  '
        ],
        title:'Green Spaces, Blue Minds: The Impact of Nature on Mental Health',
        subTitle:"Discovering the therapeutic oasis: Unveiling the profound influence of nature on mental well-being in an urbanized world",
        article:`In a world dominated by urbanization and technological advancements, the intrinsic connection between nature and mental well-being takes center stage. "Green Spaces, Blue Minds" explores the profound impact of nature on mental health, unraveling the therapeutic qualities embedded in natural environments. The calming influence of green spaces, be they lush parks or serene landscapes, emerges as a powerful antidote to the stresses of modern life. The revitalizing effect of nature on cognitive function and emotional resilience becomes evident, offering individuals a sanctuary for mindfulness and rejuvenation. This exploration delves into the scientific underpinnings of ecotherapy, highlighting the essential role of nature in fostering mental equilibrium and advocating for the incorporation of green spaces into our daily lives as a holistic approach to mental health care.`
      },
      {
        id:4,
        imageUrl:'assets/images/news-image-4.png',
        hashTags:[
          'JAN 12, 2023',
          'WorkplaceWellness ',
        ],
        title:'Workplace Wellness: Fostering Mental Health in Corporate Environments',
        subTitle:"Nurturing a resilient workforce: A comprehensive exploration of strategies to prioritize mental health and wellness in the corporate setting.",
        article:`In the dynamic realm of contemporary workplaces, the imperative of prioritizing mental health takes center stage. "Workplace Wellness" delves into the proactive strategies and initiatives aimed at fostering mental health within corporate environments. From the implementation of comprehensive well-being programs to the cultivation of supportive workplace cultures, this exploration recognizes the pivotal role that corporate entities play in shaping the mental health landscape. By emphasizing the significance of work-life balance, destigmatizing mental health conversations, and providing accessible resources, corporate environments can become catalysts for positive mental well-being. This article advocates for a paradigm shift, urging organizations to recognize the inherent connection between employee mental health, productivity, and overall success, thus creating environments that nurture the holistic wellness of their workforce.`
      }
    ];


    return data;
  }
}
