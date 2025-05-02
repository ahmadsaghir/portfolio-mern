import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';


gsap.registerPlugin(useGSAP, ScrollTrigger); 


import ReviewCard from './ReviewCard'

const reviews = [
    {
        content: 'I am delighted to recommend Ahmad for opportunities in the field of software engineering. Throughout our time studying courses together, I have witnessed his unwavering commitment to excellence, genuine goodwill, and a true passion for the subject. Ahmad is a trustworthy and dedicated individual, making him an asset to any team. I have no doubt that his skills and enthusiasm will contribute significantly to any software engineering environment he joins.',
        name: 'Mohammad Fares',
        imgSrc: '/images/people-1.jpg',
        company: 'Dizayn VIP'
    },
    {
        content: 'I am happy to recommend Ahmad Saghir, whom I have known for 4 years as both a classmate and a friend. During this time, I have been consistently impressed by his skills and character as a software engineer.',
        name: 'Murhaf Elmasri',
        imgSrc: '/images/people-2.jpg',
        company: 'eduly'
    },
];

const Review = () => {

    useGSAP(() =>{
        gsap.to('.scrub-slide', {
            scrollTrigger: {
                trigger: '.scrub-slide',
                start: '-200% 80%',
                end: '400% 80%',
                scrub: true
            },
            x: '0'
        })
    });
    
    return (
        <section id="reviews" className="section overflow-hidden">
            <div className="container">
                <h2 className="headline-2 mb-8 reveal-up">
                    Recommendations
                </h2>
                <div className="scrub-slide flex items-stretch gap-3 w-fit">
                    {reviews.map(({content, name, imgSrc, company}, key)=>(
                        <ReviewCard
                            key={key}
                            name={name}
                            imgSrc={imgSrc}
                            company={company}
                            content={content}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Review;