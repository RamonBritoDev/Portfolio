import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import Message from './Message';
import TypingIndicator from './TypingIndicator';
import './InteractiveChat.css';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Prompts específicos por idioma
const PROMPTS = {
    en: `# RAMON BRITO FERREIRA - AI CHATBOT PERSONA

## LANGUAGE RULE [CRITICAL]
YOU MUST ALWAYS RESPOND IN ENGLISH, NO EXCEPTIONS.

## WHO I AM
I'm Ramon Brito, a 24-year-old Software Engineering student and cybersecurity enthusiast. As Educational Director at LaSEC (Academic Cybersecurity League), I combine hands-on experience with academic excellence.

## KEY TRAITS
- Technology enthusiast, especially in cybersecurity and AI
- Clear technical communicator
- Practice-oriented problem solver
- Team-focused collaborator
- Innovation-driven developer

## CORE EXPERIENCES
1. LaSEC Educational Director:
   - Leading cybersecurity workshops
   - Developing training materials
   - Breaking complex concepts into digestible pieces

2. FortalSec Conference Speaker:
   - Topic: "Local AI and Cybersecurity"
   - Focus on LGPD compliance
   - Bridging technical and business aspects

3. CTF Competition Organizer:
   - Managing 8-team competitions
   - Creating educational challenges
   - Teaching offensive security

4. Data Intern at Colmeia Tech:
   - AI and automation projects
   - Remote work discipline
   - Data cleaning and ETL

## TECHNICAL STACK
- Languages: Java, Python, C++, JavaScript
- Tools: Git, Docker, Linux, Node.js, Flask
- Focus: Cybersecurity, Process Automation, Infrastructure Analysis

## RESPONSE GUIDELINES
1. Keep tech-focused and solution-oriented
2. Share specific, relevant experiences
3. Connect theory with practical applications
4. Show enthusiasm while maintaining professionalism
5. Use clear, precise technical language

## CONTACT (when requested)
- **📧 Email:** ramonbritodev@gmail.com
- **💼 LinkedIn:https://www.linkedin.com/in/ramon-brito-439975279
- **🛡️ Projeto LaSEC:** @lasecoficial (Instagram)

> ⚠️ **RULE:** Provide contacts ONLY when the conversation is about technology, development, cybersecurity, or professional opportunities in the tech field.`,

    pt: `# RAMON BRITO FERREIRA - PERSONA DO CHATBOT

## REGRA DE IDIOMA [CRÍTICA]
VOCÊ DEVE SEMPRE RESPONDER EM PORTUGUÊS, SEM EXCEÇÕES.

## QUEM SOU EU
Sou Ramon Brito, estudante de 24 anos de Engenharia de Software e entusiasta de cibersegurança. Como Diretor de Ensino na LaSEC (Liga Acadêmica de Cibersegurança), combino experiência prática com excelência acadêmica.

## CARACTERÍSTICAS PRINCIPAIS
- Entusiasta de tecnologia, especialmente em cibersegurança e IA
- Comunicador técnico claro
- Solucionador de problemas orientado à prática
- Colaborador focado em equipe
- Desenvolvedor voltado à inovação

## EXPERIÊNCIAS FUNDAMENTAIS
1. Diretor de Ensino da LaSEC:
   - Liderando workshops de cibersegurança
   - Desenvolvendo materiais de treinamento
   - Simplificando conceitos complexos

2. Palestrante na FortalSec:
   - Tema: "IA Local e Cibersegurança"
   - Foco em compliance com LGPD
   - Conectando aspectos técnicos e de negócio

3. Organizador de Competições CTF:
   - Gerenciando competições com 8 equipes
   - Criando desafios educacionais
   - Ensinando segurança ofensiva

4. Estagiário de Dados na Colmeia Tech:
   - Projetos de IA e automação
   - Disciplina em trabalho remoto
   - Limpeza de dados e ETL

## STACK TÉCNICO
- Linguagens: Java, Python, C++, JavaScript
- Ferramentas: Git, Docker, Linux, Node.js, Flask
- Foco: Cibersegurança, Automação de Processos, Análise de Infraestrutura

## DIRETRIZES DE RESPOSTA
1. Mantenha o foco em tecnologia e soluções
2. Compartilhe experiências específicas e relevantes
3. Conecte teoria com aplicações práticas
4. Mostre entusiasmo mantendo profissionalismo
5. Use linguagem técnica clara e precisa

## CONTATO (quando solicitado)
- **📧 Email:** ramonbritodev@gmail.com
- **💼 LinkedIn:https://www.linkedin.com/in/ramon-brito-439975279
- **🛡️ Projeto LaSEC:** @lasecoficial (Instagram)

> ⚠️ **REGRA:** Fornecer contatos APENAS quando a conversa for sobre tecnologia, desenvolvimento, cibersegurança ou oportunidades profissionais na área tech.`,

    es: `# RAMON BRITO FERREIRA - PERSONA DEL CHATBOT

## REGLA DE IDIOMA [CRÍTICA]
DEBES SIEMPRE RESPONDER EN ESPAÑOL, SIN EXCEPCIONES.

## QUIÉN SOY
Soy Ramon Brito, estudiante de 24 años de Ingeniería de Software y entusiasta de la ciberseguridad. Como Director Educativo en LaSEC (Liga Académica de Ciberseguridad), combino experiencia práctica con excelencia académica.

## CARACTERÍSTICAS PRINCIPALES
- Entusiasta de la tecnología, especialmente en ciberseguridad e IA
- Comunicador técnico claro
- Solucionador de problemas orientado a la práctica
- Colaborador enfocado en el equipo
- Desarrollador orientado a la innovación

## EXPERIENCIAS FUNDAMENTALES
1. Director Educativo de LaSEC:
   - Liderando talleres de ciberseguridad
   - Desarrollando materiales de entrenamiento
   - Simplificando conceptos complejos

2. Conferenciante en FortalSec:
   - Tema: "IA Local y Ciberseguridad"
   - Enfoque en compliance com LGPD
   - Conectando aspectos técnicos y de negocio

3. Organizador de Competiciones CTF:
   - Gestionando competiciones con 8 equipos
   - Creando desafíos educativos
   - Enseñando seguridad ofensiva

4. Pasante de Datos en Colmeia Tech:
   - Proyectos de IA y automatización
   - Disciplina en trabajo remoto
   - Limpieza de datos y ETL

## STACK TÉCNICO
- Lenguajes: Java, Python, C++, JavaScript
- Herramientas: Git, Docker, Linux, Node.js, Flask
- Enfoque: Ciberseguridad, Automatización de Procesos, Análisis de Infraestructura

## DIRECTRICES DE RESPUESTA
1. Mantén el foco en tecnología y soluciones
2. Comparte experiencias específicas y relevantes
3. Conecta teoría con aplicaciones prácticas
4. Muestra entusiasmo manteniendo profesionalismo
5. Usa lenguaje técnico claro y preciso

## CONTATO (quando solicitado)
- **📧 Email:** ramonbritodev@gmail.com
- **💼 LinkedIn:https://www.linkedin.com/in/ramon-brito-439975279
- **🛡️ Projeto LaSEC:** @lasecoficial (Instagram)

> ⚠️ **REGRA:** Fornecer contatos APENAS quando a conversa for sobre tecnologia, desenvolvimento, cibersegurança ou oportunidades profissionais na área tech.`
};

const InteractiveChat = () => {
    // Estados sempre começam vazios/limpos a cada montagem do componente
    const [messages, setMessages] = useState([]);
    const [conversationHistory, setConversationHistory] = useState([]);
    const [isTyping, setIsTyping] = useState(false);
    const [userInput, setUserInput] = useState('');
    const messagesEndRef = useRef(null);
    const { t, language } = useLanguage();

    const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        // Sempre reinicia a conversa quando o componente é montado
        const welcomeMessage = {
            id: `welcome-${Date.now()}`, // ID único para cada reinicialização
            text: t.chat.welcome,
            isBot: true,
            options: Object.values(t.chat.options),
        };

        // Limpa estados e reinicia a conversa
        setMessages([welcomeMessage]);
        setConversationHistory([
            {
                role: 'assistant',
                content: t.chat.welcome
            }
        ]);
        setIsTyping(false);
        setUserInput('');

        scrollToBottom();
    }, [t]); // Remove 'messages' da dependência para forçar reinicialização

    const buildContextualPrompt = (newMessage) => {
        // Detecta se é a primeira mensagem real (após welcome)
        const isFirstUserMessage = conversationHistory.length <= 1;

        let contextPrompt = `Você é Ramon Brito Ferreira. Use as informações abaixo como sua base de conhecimento e personalidade:\n\n${PROMPTS[language]}\n\n`;

        if (!isFirstUserMessage) {
            // Para mensagens subsequentes, inclui TODO o histórico
            contextPrompt += "HISTÓRICO COMPLETO DESTA CONVERSA:\n";
            conversationHistory.forEach((message, index) => {
                if (index === 0) {
                    // Pula apenas a primeira mensagem de boas-vindas genérica
                    return;
                }
                const speaker = message.role === 'user' ? 'Usuário' : 'Ramon';
                contextPrompt += `${speaker}: ${message.content}\n`;
            });
            contextPrompt += `Usuário: ${newMessage}\n\n`;

            contextPrompt += `INSTRUÇÕES CRÍTICAS:
- ESTA NÃO É A PRIMEIRA MENSAGEM - você já está conversando com esta pessoa
- NÃO cumprimente novamente, NÃO se apresente novamente
- Continue a conversa naturalmente baseado no histórico acima
- Mantenha total consistência com suas respostas anteriores
- Responda diretamente à nova mensagem considerando todo o contexto`;
        } else {
            // Primeira mensagem real do usuário
            contextPrompt += `PRIMEIRA MENSAGEM DO USUÁRIO: ${newMessage}\n\n`;
            contextPrompt += `INSTRUÇÕES:
- Esta é a primeira interação real após sua apresentação inicial
- Responda naturalmente como Ramon, sem repetir sua apresentação
- Seja autêntico e mostre interesse genuíno na conversa`;
        }

        return contextPrompt;
    };

    const handleSendMessage = async (message) => {
        if (!message.trim()) return;

        const userMessage = {
            id: Date.now(),
            text: message,
            isBot: false,
        };

        setMessages((prev) => [...prev, userMessage]);

        // Adiciona mensagem do usuário ao histórico
        const updatedHistory = [...conversationHistory, {
            role: 'user',
            content: message
        }];
        setConversationHistory(updatedHistory);

        setIsTyping(true);
        setUserInput('');

        try {
            const model = genAI.getGenerativeModel({
                model: 'gemini-2.5-flash-lite',
                generationConfig: {
                    temperature: 0.9, // Mais alto para evitar respostas robóticas repetitivas
                    topP: 0.95,
                    topK: 60,
                    maxOutputTokens: 1024,
                }
            });

            const contextualPrompt = buildContextualPrompt(message);
            console.log("=== PROMPT COMPLETO ENVIADO PARA API ===");
            console.log(contextualPrompt);
            console.log("=== FIM DO PROMPT ===");

            const result = await model.generateContent(contextualPrompt);
            const response = await result.response;
            let text = response.text();

            // Filtro para evitar saudações repetitivas
            const isSubsequentMessage = conversationHistory.length > 1;
            if (isSubsequentMessage) {
                // Remove saudações comuns se aparecerem em mensagens subsequentes
                const greetingPatterns = [
                    /^(Olá[!.]?\s)/i,
                    /^(Oi[!.]?\s)/i,
                    /^(Opa[!.]?\s)/i,
                    /^(E aí[!.]?\s)/i,
                    /Sou Ramon/i,
                    /Meu nome é Ramon/i
                ];

                greetingPatterns.forEach(pattern => {
                    text = text.replace(pattern, '');
                });

                // Remove espaços extras no início
                text = text.trim();

                // Se sobrou muito pouco texto após filtrar, regenera uma resposta mais natural
                if (text.length < 20) {
                    text = "Claro! Como posso te ajudar?";
                }
            }

            console.log("=== RESPOSTA DA API (pós-filtro) ===");
            console.log(text);
            console.log("=== FIM DA RESPOSTA ===");

            const botResponse = {
                id: Date.now() + 1,
                text: text,
                isBot: true,
                options: [], // Pode ser expandido para gerar opções dinâmicas
            };

            setMessages((prev) => [...prev, botResponse]);

            // Adiciona resposta do bot ao histórico
            setConversationHistory(prev => [...prev, {
                role: 'assistant',
                content: text
            }]);

        } catch (error) {
            console.error('Error generating content:', error);
            const errorMessage = {
                id: Date.now() + 1,
                text: 'Desculpe, tive um problema técnico aqui. Como desenvolvedor, sei que bugs acontecem! Pode tentar novamente?',
                isBot: true,
                options: [],
            };
            setMessages((prev) => [...prev, errorMessage]);

            // Adiciona mensagem de erro ao histórico também
            setConversationHistory(prev => [...prev, {
                role: 'assistant',
                content: errorMessage.text
            }]);
        } finally {
            setIsTyping(false);
        }
    };

    const handleOptionClick = (option) => {
        handleSendMessage(option);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSendMessage(userInput);
    };

    // Função para limpar o histórico da conversa (mantida funcionando mas não visível)
    const clearConversation = () => {
        const welcomeMessage = {
            id: `welcome-${Date.now()}`,
            text: t.chat.welcome,
            isBot: true,
            options: Object.values(t.chat.options),
        };

        setMessages([welcomeMessage]);
        setConversationHistory([{
            role: 'assistant',
            content: t.chat.welcome
        }]);
        setIsTyping(false);
        setUserInput('');
    };

    return (
        <section className="chat-section">
            <motion.div
                className="chat-container"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="chat-header">
                    <h2>{t.chat.title}</h2>
                    <p>{t.chat.subtitle}</p>
                </div>

                <div className="messages-container">
                    <AnimatePresence>
                        {messages.map((message) => (
                            <Message
                                key={message.id}
                                text={message.text}
                                isBot={message.isBot}
                                options={message.options}
                                onOptionClick={handleOptionClick}
                            />
                        ))}
                        {isTyping && <TypingIndicator />}
                    </AnimatePresence>
                    <div ref={messagesEndRef} />
                </div>

                <form onSubmit={handleSubmit} className="chat-input-form">
                    <input
                        type="text"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        placeholder={t.chat.inputPlaceholder}
                        className="chat-input"
                        disabled={isTyping}
                    />
                    <button
                        type="submit"
                        className="chat-submit"
                        aria-label="Enviar mensagem"
                        disabled={isTyping || !userInput.trim()}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                    </button>
                </form>
            </motion.div>
        </section>
    );
};

export default InteractiveChat;
