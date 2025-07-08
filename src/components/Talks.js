import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import Slider from 'react-slick';
import './Talks.css';

// Import images
import fortalSec1 from '../assets/fortalsec-unifor/WhatsApp Image 2025-07-04 at 15.25.28.jpeg';
import fortalSec2 from '../assets/fortalsec-unifor/WhatsApp Image 2025-07-04 at 15.25.29.jpeg';
import fortalSec3 from '../assets/fortalsec-unifor/WhatsApp Image 2025-07-04 at 15.25.29(1).jpeg';
import fortalSec4 from '../assets/fortalsec-unifor/WhatsApp Image 2025-07-04 at 15.25.29(2).jpeg';
import fortalSec5 from '../assets/fortalsec-unifor/WhatsApp Image 2025-07-04 at 15.25.29(3).jpeg';

// Import Universo Uniateneu images
import uniateneu1 from '../assets/universo-uniateneu/WhatsApp Image 2025-07-04 at 15.26.07.jpeg';
import uniateneu2 from '../assets/universo-uniateneu/WhatsApp Image 2025-07-04 at 16.15.13.jpeg';
import uniateneu3 from '../assets/universo-uniateneu/WhatsApp Image 2025-07-04 at 16.15.55.jpeg';

// Import CTF images and video
import ctf1 from '../assets/ctf-uniateneu/WhatsApp Image 2025-07-06 at 14.46.17.jpeg';
import ctf2 from '../assets/ctf-uniateneu/WhatsApp Image 2025-07-06 at 14.46.18.jpeg';
import ctf3 from '../assets/ctf-uniateneu/WhatsApp Image 2025-07-06 at 14.46.18(1).jpeg';
import ctf4 from '../assets/ctf-uniateneu/WhatsApp Image 2025-07-06 at 14.46.18(2).jpeg';
import ctf5 from '../assets/ctf-uniateneu/WhatsApp Image 2025-07-06 at 14.46.18(3).jpeg';
import ctf6 from '../assets/ctf-uniateneu/WhatsApp Image 2025-07-06 at 14.47.33.jpeg';
import ctf7 from '../assets/ctf-uniateneu/WhatsApp Image 2025-07-06 at 14.47.43.jpeg';
import ctfVideo from '../assets/ctf-uniateneu/SnapInsta.to_AQOj-fPHEsLqznKy6-K1qNN7sYZ_o5wHCdG0gvoQk9EaHq-Ks7nMZrPJRbVNll9kvFN_Jv1mlxaJ9U3uk6feLfPVtOL2aed_VjsMrOM.mp4';

// Import Bandit Palestra images
import bandit1 from '../assets/bandit-palestra/1714786662876.jpg';
import bandit2 from '../assets/bandit-palestra/1714786663025.jpg';

// Import EEEP Palestra images
import eeep1 from '../assets/eeep-palestra/1750912647471.jpg';
import eeep2 from '../assets/eeep-palestra/1750912650293.jpg';
import eeep3 from '../assets/eeep-palestra/1750912652182.jpg';

// Import Lar Três Irmãs images
import lar1 from '../assets/lar-tres-irmas/1746197262011.jpg';
import lar2 from '../assets/lar-tres-irmas/1746197262544.jpg';
import lar3 from '../assets/lar-tres-irmas/1746197262810.jpg';

const Talks = () => {
    const { language } = useLanguage();
    const [selectedMedia, setSelectedMedia] = useState(null);
    const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
    const [currentMediaList, setCurrentMediaList] = useState([]);

    const fortalSecImages = [
        { src: fortalSec1, alt: 'FortalSec 2025 - Image 1' },
        { src: fortalSec2, alt: 'FortalSec 2025 - Image 2' },
        { src: fortalSec3, alt: 'FortalSec 2025 - Image 3' },
        { src: fortalSec4, alt: 'FortalSec 2025 - Image 4' },
        { src: fortalSec5, alt: 'FortalSec 2025 - Image 5' },
    ];

    const universoUniateneuImages = [
        { src: uniateneu1, alt: 'Universo UniAteneu - Image 1' },
        { src: uniateneu2, alt: 'Universo UniAteneu - Image 2' },
        { src: uniateneu3, alt: 'Universo UniAteneu - Image 3' },
    ];

    const ctfMedia = [
        { src: ctf1, alt: 'CTF UniAteneu - Image 1', type: 'image' },
        { src: ctf2, alt: 'CTF UniAteneu - Image 2', type: 'image' },
        { src: ctf3, alt: 'CTF UniAteneu - Image 3', type: 'image' },
        { src: ctf4, alt: 'CTF UniAteneu - Image 4', type: 'image' },
        { src: ctf5, alt: 'CTF UniAteneu - Image 5', type: 'image' },
        { src: ctf6, alt: 'CTF UniAteneu - Image 6', type: 'image' },
        { src: ctf7, alt: 'CTF UniAteneu - Image 7', type: 'image' },
        { src: ctfVideo, alt: 'CTF UniAteneu - Video', type: 'video' },
    ];

    const banditImages = [
        { src: bandit1, alt: 'Bandit Workshop - Image 1' },
        { src: bandit2, alt: 'Bandit Workshop - Image 2' },
    ];

    const eeepImages = [
        { src: eeep1, alt: 'EEEP Palestra - Image 1' },
        { src: eeep2, alt: 'EEEP Palestra - Image 2' },
        { src: eeep3, alt: 'EEEP Palestra - Image 3' },
    ];

    const larImages = [
        { src: lar1, alt: 'Lar Três Irmãs - Image 1' },
        { src: lar2, alt: 'Lar Três Irmãs - Image 2' },
        { src: lar3, alt: 'Lar Três Irmãs - Image 3' },
    ];

    const carouselSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        adaptiveHeight: true,
        beforeChange: (current, next) => {
            // Pause video if it's playing when sliding
            const videos = document.querySelectorAll('.carousel-video');
            videos.forEach(video => video.pause());
        }
    };

    const handleMediaClick = (media, mediaList, index, e) => {
        e.preventDefault();
        e.stopPropagation();
        setSelectedMedia(media);
        setCurrentMediaList(mediaList);
        setCurrentMediaIndex(index);
    };

    const handlePrevMedia = () => {
        const newIndex = (currentMediaIndex - 1 + currentMediaList.length) % currentMediaList.length;
        setSelectedMedia(currentMediaList[newIndex]);
        setCurrentMediaIndex(newIndex);
    };

    const handleNextMedia = () => {
        const newIndex = (currentMediaIndex + 1) % currentMediaList.length;
        setSelectedMedia(currentMediaList[newIndex]);
        setCurrentMediaIndex(newIndex);
    };

    const talks = [
        {
            event: "EEEP Leonel de Moura Brizola",
            location: language === 'pt' ? "EEEP Leonel de Moura Brizola - Fortaleza" :
                     language === 'es' ? "EEEP Leonel de Moura Brizola - Fortaleza" :
                     "EEEP Leonel de Moura Brizola - Fortaleza",
            description: language === 'pt' ? "Demonstração prática de robô autônomo (IoT) e sua segurança." :
                        language === 'es' ? "Demostración práctica de robot autónomo (IoT) y su seguridad." :
                        "Practical demonstration of autonomous robot (IoT) and its security.",
            images: eeepImages
        },
        {
            event: language === 'pt' ? "Inclusão Digital no Lar Três Irmãs" :
                   language === 'es' ? "Inclusión Digital en el Hogar Três Irmãs" :
                   "Digital Inclusion at Lar Três Irmãs",
            location: language === 'pt' ? "Lar Três Irmãs - Fortaleza" :
                     language === 'es' ? "Hogar Três Irmãs - Fortaleza" :
                     "Lar Três Irmãs - Fortaleza",
            description: language === 'pt' ? "Ensino de uso de celular e aplicativos para idosos com manual de apoio." :
                        language === 'es' ? "Enseñanza del uso de celulares y aplicaciones para ancianos con manual de apoyo." :
                        "Teaching mobile phone and app usage for elderly with support manual.",
            images: larImages
        },
        {
            event: "FortalSec 2025",
            location: language === 'pt' ? "Unifor - Universidade de Fortaleza" : 
                     language === 'es' ? "Unifor - Universidad de Fortaleza" : 
                     "Unifor - University of Fortaleza",
            title: language === 'pt' ? "IA Local e Cibersegurança: A Solução Ideal para Proteger Seu Negócio e Seus Dados" :
                    language === 'es' ? "IA Local y Ciberseguridad: La Solución Ideal para Proteger tu Negocio y tus Datos" :
                    "Local AI and Cybersecurity: The Ideal Solution to Protect Your Business and Data",
            description: language === 'pt' ? "Foco em LLMs locais, compliance com LGPD e eficiência operacional." :
                         language === 'es' ? "Enfoque en LLMs locales, cumplimiento de LGPD y eficiencia operacional." :
                         "Focus on local LLMs, LGPD compliance, and operational efficiency.",
            images: fortalSecImages
        },
        {
            event: "Universo UniAteneu",
            location: language === 'pt' ? "UniAteneu - Centro Universitário Ateneu" :
                     language === 'es' ? "UniAteneu - Centro Universitario Ateneu" :
                     "UniAteneu - Ateneu University Center",
            title: language === 'pt' ? "Golpes com IA (Clonagem de Voz e Deepfakes)" :
                   language === 'es' ? "Estafas con IA (Clonación de Voz y Deepfakes)" :
                   "AI Scams (Voice Cloning and Deepfakes)",
            description: language === 'pt' ? "Conscientização sobre fraudes digitais e soluções de mitigação." :
                        language === 'es' ? "Concientización sobre fraudes digitales y soluciones de mitigación." :
                        "Awareness about digital fraud and mitigation solutions.",
            images: universoUniateneuImages
        },
        {
            event: language === 'pt' ? "1ª Competição CTF da CyberSEC" :
                   language === 'es' ? "1ª Competición CTF de CyberSEC" :
                   "1st CTF Competition by CyberSEC",
            location: language === 'pt' ? "UniAteneu - Unidade Lagoa de Messejana" :
                     language === 'es' ? "UniAteneu - Unidad Lagoa de Messejana" :
                     "UniAteneu - Lagoa de Messejana Campus",
            description: language === 'pt' ? 
                "Organização e execução da primeira competição CTF da CyberSEC, reunindo 8 equipes dos cursos de TI. Os participantes tiveram 40 minutos para resolver desafios de segurança cibernética, testando habilidades técnicas e trabalho em equipe." :
                language === 'es' ? 
                "Organización y ejecución de la primera competición CTF de CyberSEC, reuniendo 8 equipos de los cursos de TI. Los participantes tuvieron 40 minutos para resolver desafíos de seguridad cibernética, probando habilidades técnicas y trabajo en equipo." :
                "Organization and execution of CyberSEC's first CTF competition, bringing together 8 teams from IT courses. Participants had 40 minutes to solve cybersecurity challenges, testing technical skills and teamwork.",
            media: ctfMedia,
            articleLink: "https://uniateneu.edu.br/cursos-de-tecnologia-da-informacao-da-uniateneu-promoveram-a-1a-competicao-de-capture-the-flag-ctf-da-cybersec/"
        },
        {
            event: "OverTheWire (Bandit)",
            location: language === 'pt' ? "UniAteneu - Centro Universitário Ateneu" :
                     language === 'es' ? "UniAteneu - Centro Universitario Ateneu" :
                     "UniAteneu - Ateneu University Center",
            title: language === 'pt' ? "Introdução à Cibersegurança" :
                   language === 'es' ? "Introducción a la Ciberseguridad" :
                   "Introduction to Cybersecurity",
            description: language === 'pt' ? "Aula introdutória sobre desafios práticos de segurança ofensiva e Linux." :
                        language === 'es' ? "Clase introductoria sobre desafíos prácticos de seguridad ofensiva y Linux." :
                        "Introductory class on practical offensive security challenges and Linux.",
            images: banditImages
        }
    ];

    return (
        <section className="talks-section">
            <h2>
                {language === 'pt' ? '🎤 Palestras e Atividades' :
                 language === 'es' ? '🎤 Charlas y Actividades' :
                 '🎤 Talks and Activities'}
            </h2>
            <div className="talks-container">
                {talks.map((talk, index) => (
                    <div key={index} className="talk-card">
                        {talk.media && (
                            <div className="carousel-container">
                                <Slider {...carouselSettings}>
                                    {talk.media.map((media, mediaIndex) => (
                                        <div key={mediaIndex} className="carousel-slide">
                                            {media.type === 'video' ? (
                                                <div 
                                                    className="carousel-video-wrapper"
                                                    onClick={(e) => handleMediaClick(media, talk.media, mediaIndex, e)}
                                                >
                                                    <video
                                                        src={media.src}
                                                        className="carousel-video"
                                                        muted
                                                        playsInline
                                                    />
                                                    <div className="video-play-overlay">
                                                        <span className="play-button">▶</span>
                                                    </div>
                                                </div>
                                            ) : (
                                                <img
                                                    src={media.src}
                                                    alt={media.alt}
                                                    className="carousel-image"
                                                    onClick={(e) => handleMediaClick(media, talk.media, mediaIndex, e)}
                                                />
                                            )}
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        )}
                        {talk.images && (
                            <div className="carousel-container">
                                <Slider {...carouselSettings}>
                                    {talk.images.map((image, imgIndex) => (
                                        <div key={imgIndex}>
                                            <img
                                                src={image.src}
                                                alt={image.alt}
                                                className="carousel-image"
                                                onClick={(e) => handleMediaClick(image, talk.images, imgIndex, e)}
                                            />
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        )}
                        <div className="talk-content">
                            <h3>{talk.event}</h3>
                            {talk.location && <p className="talk-location">{talk.location}</p>}
                            {talk.title && <p className="talk-title">{talk.title}</p>}
                            <p className="talk-description">{talk.description}</p>
                            {talk.articleLink && (
                                <a 
                                    href={talk.articleLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="article-link"
                                >
                                    {language === 'pt' ? 'Leia a matéria completa' :
                                     language === 'es' ? 'Lea el artículo completo' :
                                     'Read the full article'}
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {selectedMedia && (
                <div className="modal-overlay" onClick={() => setSelectedMedia(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        {selectedMedia.type === 'video' ? (
                            <video
                                src={selectedMedia.src}
                                controls
                                autoPlay
                                className="modal-video"
                            />
                        ) : (
                            <img
                                src={selectedMedia.src}
                                alt={selectedMedia.alt}
                                className="modal-image"
                            />
                        )}
                        <button 
                            className="modal-close"
                            onClick={() => setSelectedMedia(null)}
                            aria-label="Fechar"
                        >
                            ×
                        </button>
                        {currentMediaList.length > 1 && (
                            <>
                                <button 
                                    className="modal-nav prev"
                                    onClick={handlePrevMedia}
                                    aria-label="Imagem anterior"
                                >
                                    ‹
                                </button>
                                <button 
                                    className="modal-nav next"
                                    onClick={handleNextMedia}
                                    aria-label="Próxima imagem"
                                >
                                    ›
                                </button>
                            </>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
};

export default Talks; 