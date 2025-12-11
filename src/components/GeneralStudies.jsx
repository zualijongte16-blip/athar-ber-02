import React, { useState, useEffect } from 'react';
import '../css/GeneralStudies.css';
import { useLanguage } from '../contexts/LanguageContext';

const GeneralStudies = () => {
  const { language } = useLanguage();
  const [selectedSection, setSelectedSection] = useState('current-affairs');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [currentAffairs, setCurrentAffairs] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleQuizOptionClick = (questionIndex, optionIndex) => {
    setQuizAnswers(prev => ({
      ...prev,
      [questionIndex]: optionIndex
    }));
  };

  const fetchCurrentAffairs = async (date) => {
    const cacheKey = `${date}-${language}`;
    if (currentAffairs[cacheKey]) return; // Already fetched

    setLoading(true);
    setError(null);

    // Simulate API delay
    setTimeout(() => {
      const articles = sampleCurrentAffairs[date] || [{ title: 'No news available for this date', content: 'Try selecting a different date.' }];
      setCurrentAffairs(prev => ({
        ...prev,
        [cacheKey]: articles
      }));
      setLoading(false);
    }, 500); // Simulate loading time
  };

  useEffect(() => {
    if (selectedSection === 'current-affairs') {
      fetchCurrentAffairs(selectedDate);
    }
  }, [selectedDate, selectedSection, language]);

  const sampleCurrentAffairs = {
    '2024-10-01': [
      { title: 'India Launches New Space Mission', content: 'India successfully launched its latest satellite mission, expanding communication capabilities across the country.' },
      { title: 'Economic Growth Reaches 7%', content: 'India\'s GDP growth has reached 7% in the latest quarter, driven by strong performance in the service sector.' }
    ],
    '2024-10-02': [
      { title: 'New Renewable Energy Policy', content: 'The government announced a new policy to boost renewable energy production, aiming for 500 GW by 2030.' }
    ],
    '2024-10-03': [
      { title: 'Parliament Passes Education Bill', content: 'A new education bill was passed in parliament, focusing on improving quality and accessibility of education.' }
    ],
    '2024-10-04': [
      { title: 'Tech Summit in Bangalore', content: 'A major technology summit was held in Bangalore, showcasing innovations in AI and software development.' }
    ],
    '2024-10-05': [
      { title: 'Climate Change Conference', content: 'India hosted an international conference on climate change, discussing global efforts to reduce emissions.' }
    ],
    '2024-10-06': [
      { title: 'Healthcare Initiative Launched', content: 'A new healthcare initiative was launched to provide better medical facilities in rural areas.' }
    ],
    '2024-10-07': [
      { title: 'Sports Achievements', content: 'Indian athletes achieved new records in international sports competitions.' }
    ],
    '2024-10-08': [
      { title: 'Infrastructure Development', content: 'Major infrastructure projects were inaugurated, improving connectivity across states.' }
    ],
    '2024-10-09': [
      { title: 'Cultural Festival', content: 'A national cultural festival celebrated India\'s diverse heritage and traditions.' }
    ],
    '2024-10-10': [
      { title: 'Scientific Breakthrough', content: 'Indian scientists made a breakthrough in medical research, leading to new treatment options.' }
    ],
    '2024-10-11': [
      { title: 'Election Results Announced', content: 'The results of the recent state elections were announced, bringing new governments to power.' }
    ],
    '2024-10-12': [
      { title: 'New Trade Agreement', content: 'India signed a new trade agreement with neighboring countries to boost economic cooperation.' }
    ],
    '2024-10-13': [
      { title: 'Festival Celebrations', content: 'Major festivals were celebrated across the country with traditional events and cultural programs.' }
    ],
    '2024-10-14': [
      { title: 'Technology Innovation', content: 'A new technology innovation hub was inaugurated in a major city to foster startups.' }
    ],
    '2024-10-15': [
      { title: 'Agricultural Reforms', content: 'New agricultural reforms were introduced to improve farmer welfare and crop yields.' }
    ],
    '2024-10-16': [
      { title: 'International Summit', content: 'India hosted an international summit on global security and cooperation.' }
    ],
    '2024-10-17': [
      { title: 'Sports Event', content: 'A major international sports event concluded with India achieving notable successes.' }
    ],
    '2024-10-18': [
      { title: 'Environmental Initiative', content: 'A nationwide environmental initiative was launched to combat pollution and promote sustainability.' }
    ],
    '2024-10-19': [
      { title: 'Education Policy Update', content: 'Updates to the national education policy were announced to enhance learning outcomes.' }
    ],
    '2024-10-20': [
      { title: 'Economic Indicators', content: 'Latest economic indicators showed positive growth in key sectors of the economy.' }
    ]
  };

  const sampleDailyTopics = {
    '2024-10-01': [
      { title: 'Geography: Rivers of India', content: 'The major rivers of India include the Ganges, Yamuna, Brahmaputra, Indus, and Godavari. These rivers play crucial roles in agriculture, transportation, and the economy.' },
      { title: 'History: Ancient Civilizations', content: 'Ancient India had advanced civilizations like the Indus Valley Civilization (3300-1300 BCE) and the Vedic period that followed.' }
    ],
    '2024-10-02': [
      { title: 'Science: Renewable Energy', content: 'Renewable energy sources include solar, wind, hydro, and geothermal power. India aims to achieve 500 GW of renewable energy capacity by 2030.' }
    ],
    '2024-10-03': [
      { title: 'Polity: Indian Constitution', content: 'The Constitution of India was adopted on November 26, 1949, and came into effect on January 26, 1950. It is the longest written constitution in the world.' }
    ],
    '2024-10-04': [
      { title: 'Economics: GDP and Growth', content: 'India\'s GDP growth rate has been around 6-7% in recent years. The service sector contributes the largest share to India\'s GDP.' }
    ],
    '2024-10-05': [
      { title: 'Environment: Climate Change', content: 'Climate change poses significant challenges to India including rising sea levels, extreme weather events, and impacts on agriculture and water resources.' }
    ],
    '2024-10-06': [
      { title: 'Biology: Human Body Systems', content: 'The human body has several systems including circulatory, respiratory, digestive, and nervous systems that work together to maintain life.' }
    ],
    '2024-10-07': [
      { title: 'Mathematics: Algebra Basics', content: 'Algebra deals with symbols and the rules for manipulating those symbols. It is essential for solving equations and understanding patterns.' }
    ],
    '2024-10-08': [
      { title: 'Literature: Indian Epics', content: 'The Ramayana and Mahabharata are two major Sanskrit epics of ancient India that contain philosophical and moral teachings.' }
    ],
    '2024-10-09': [
      { title: 'Physics: Laws of Motion', content: 'Newton\'s three laws of motion describe the relationship between the motion of an object and the forces acting on it.' }
    ],
    '2024-10-10': [
      { title: 'Chemistry: Periodic Table', content: 'The periodic table organizes elements by atomic number and groups them by similar chemical properties.' }
    ]
  };

  const allQuizQuestions = [
    {
      question: 'What is the capital of India?',
      options: ['Mumbai', 'Delhi', 'Kolkata', 'Chennai'],
      correct: 1
    },
    {
      question: 'Which river is known as the Ganges?',
      options: ['Yamuna', 'Brahmaputra', 'Ganges', 'Indus'],
      correct: 2
    },
    {
      question: 'Who was the first Prime Minister of India?',
      options: ['Sardar Patel', 'Jawaharlal Nehru', 'Mahatma Gandhi', 'Rajguru'],
      correct: 1
    },
    {
      question: 'What is the largest planet in our solar system?',
      options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
      correct: 2
    },
    {
      question: 'Which element has the chemical symbol O?',
      options: ['Gold', 'Oxygen', 'Silver', 'Iron'],
      correct: 1
    },
    {
      question: 'In which year did India gain independence?',
      options: ['1945', '1947', '1950', '1952'],
      correct: 1
    },
    {
      question: 'What is the currency of India?',
      options: ['Rupee', 'Dollar', 'Euro', 'Yen'],
      correct: 0
    },
    {
      question: 'Which ocean is the largest?',
      options: ['Atlantic', 'Indian', 'Arctic', 'Pacific'],
      correct: 3
    },
    {
      question: 'Who wrote the play "Romeo and Juliet"?',
      options: ['Charles Dickens', 'William Shakespeare', 'Jane Austen', 'Mark Twain'],
      correct: 1
    },
    {
      question: 'What is the square root of 144?',
      options: ['10', '12', '14', '16'],
      correct: 1
    }
  ];

  const getQuizQuestions = () => {
    const dateNum = new Date(selectedDate).getTime();
    const startIndex = (dateNum % allQuizQuestions.length) % (allQuizQuestions.length - 2);
    return allQuizQuestions.slice(startIndex, startIndex + 3);
  };

  const quizQuestions = getQuizQuestions();

  const getContent = () => {
    if (selectedSection === 'current-affairs') {
      const cacheKey = `${selectedDate}-${language}`;
      return currentAffairs[cacheKey] || [{ title: 'No content available for this date', content: 'Loading current affairs...' }];
    } else {
      return sampleDailyTopics[selectedDate] || [{ title: 'No content available for this date', content: 'Please select another date.' }];
    }
  };

  return (
    <div className="general-studies-container">
      <h1>General Studies</h1>

      <div className="section-tabs">
        <button
          className={selectedSection === 'current-affairs' ? 'active' : ''}
          onClick={() => handleSectionChange('current-affairs')}
        >
          Current Affairs
        </button>
        <button
          className={selectedSection === 'daily-topic' ? 'active' : ''}
          onClick={() => handleSectionChange('daily-topic')}
        >
          Daily Topic
        </button>
      </div>

      <div className="date-picker">
        <label htmlFor="date-select">Select Date:</label>
        <input
          type="date"
          id="date-select"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </div>

      <div className="content-section">
        <h2>{selectedSection === 'current-affairs' ? `Current Affairs for ${selectedDate}` : `Daily Topic for ${selectedDate}`}</h2>
        {loading && selectedSection === 'current-affairs' && (
          <div className="loading">Loading current affairs...</div>
        )}
        {error && selectedSection === 'current-affairs' && (
          <div className="error">{error}</div>
        )}
        {getContent().map((item, index) => (
          <div key={index} className="content-item">
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </div>
        ))}
      </div>

      <div className="quiz-section">
        <h2>Quiz</h2>
        {quizQuestions.map((q, qIndex) => (
          <div key={qIndex} className="quiz-question">
            <h4>{q.question}</h4>
            <div className="quiz-options">
              {q.options.map((option, oIndex) => (
                <button
                  key={oIndex}
                  className={`quiz-option ${
                    quizAnswers[qIndex] !== undefined
                      ? oIndex === q.correct
                        ? 'correct'
                        : quizAnswers[qIndex] === oIndex
                        ? 'incorrect'
                        : ''
                      : ''
                  }`}
                  onClick={() => handleQuizOptionClick(qIndex, oIndex)}
                  disabled={quizAnswers[qIndex] !== undefined}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GeneralStudies;
