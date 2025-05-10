import React, { useState } from 'react';
import { 
  ChevronRight, 
  Lightbulb,
  Brain,
  Target,
  Code,
  Zap,
  Check,
  Copy,
  Moon,
  Sun,
  ArrowLeft,
  Sparkles,
  Network
} from 'lucide-react';

const PromptEngineeringGuide = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [copied, setCopied] = useState(false);

  // Creative Intelligence Lab Brand Colors
  const colors = {
    darkTeal: '#004D40',
    grayBlue: '#90A4AE',
    cyan: '#00BCD4',
    navy: '#1a1a2e',
    oliveGreen: '#5a6f65',
    darkerTeal: '#00202c',
    lightGray: '#f8fafc',
    midGray: '#e2e8f0'
  };

  // Theme classes with brand colors
  const bgClass = darkMode ? 'bg-[#1a1a2e]' : 'bg-gray-50';
  const textClass = darkMode ? 'text-gray-100' : 'text-[#1a1a2e]';
  const cardBgClass = darkMode ? 'bg-[#00202c]' : 'bg-white';
  const borderClass = darkMode ? 'border-[#004D40]' : 'border-[#90A4AE]';
  const accentColor = '#00BCD4';

  // Navigation
  const navigateTo = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const toggleDarkMode = () => setDarkMode(!darkMode);

  // Content sections
  const sections = [
    {
      id: 'basics',
      title: 'The Fundamentals',
      icon: <Brain className="w-6 h-6" />,
      description: 'Master the building blocks of effective prompts',
      color: colors.darkTeal
    },
    {
      id: 'builder',
      title: 'Prompt Lab',
      icon: <Network className="w-6 h-6" />,
      description: 'Experiment and create prompts in real-time',
      color: colors.cyan
    },
    {
      id: 'techniques',
      title: 'Advanced Methods',
      icon: <Zap className="w-6 h-6" />,
      description: 'Apply sophisticated techniques for complex tasks',
      color: colors.oliveGreen
    }
  ];

  // Render different pages
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage darkMode={darkMode} navigateTo={navigateTo} sections={sections} colors={colors} />;
      case 'basics':
        return <BasicsPage darkMode={darkMode} navigateTo={navigateTo} colors={colors} />;
      case 'builder':
        return <BuilderPage darkMode={darkMode} navigateTo={navigateTo} colors={colors} />;
      case 'techniques':
        return <TechniquesPage darkMode={darkMode} navigateTo={navigateTo} colors={colors} />;
      default:
        return <HomePage darkMode={darkMode} navigateTo={navigateTo} sections={sections} colors={colors} />;
    }
  };

  return (
    <div className={`min-h-screen ${bgClass} ${textClass} transition-colors duration-300`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 ${cardBgClass} border-b ${borderClass} shadow-sm`}>
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {currentPage !== 'home' && (
              <button 
                onClick={() => navigateTo('home')}
                className="p-2 rounded hover:bg-[#004D40] hover:bg-opacity-10 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            )}
            <h1 className="text-xl font-bold flex items-center gap-2">
              <Network className="w-6 h-6" style={{ color: accentColor }} />
              Prompt Engineering Guide
            </h1>
          </div>
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded hover:bg-[#004D40] hover:bg-opacity-10 transition-colors"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {renderPage()}
      </main>
    </div>
  );
};

// Home Page Component
const HomePage = ({ darkMode, navigateTo, sections, colors }) => {
  const cardBgClass = darkMode ? 'bg-[#00202c]' : 'bg-white';
  const borderClass = darkMode ? 'border-[#004D40]' : 'border-[#90A4AE]';

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="flex justify-center mb-4">
          <div className="relative">
            <Sparkles className="w-16 h-16" style={{ color: colors.cyan }} />
            <div className="absolute inset-0 animate-pulse opacity-50">
              <Sparkles className="w-16 h-16" style={{ color: colors.grayBlue }} />
            </div>
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-4">Master Prompt Engineering</h1>
        <p className="text-xl opacity-80 mb-6">
          Transform your AI interactions with precise, creative prompts
        </p>
        <p className="text-lg opacity-60">
          From Creative Intelligence Lab - Learn the fundamentals, practice in our lab, and master advanced techniques
        </p>
      </div>

      {/* Key Insight */}
      <div className={`${cardBgClass} border ${borderClass} rounded-lg p-6 max-w-3xl mx-auto`}>
        <div className="text-center">
          <div className="text-3xl font-bold mb-2" style={{ color: colors.cyan }}>
            Quality In = Quality Out
          </div>
          <p className="opacity-80">
            The clarity and specificity of your prompt directly determines the quality of AI responses
          </p>
        </div>
      </div>

      {/* Navigation Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => navigateTo(section.id)}
            className={`${cardBgClass} border ${borderClass} rounded-lg p-6 text-left transition-all duration-300 hover:shadow-lg group transform hover:-translate-y-1`}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = section.color}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = darkMode ? colors.darkTeal : colors.grayBlue}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg" style={{ backgroundColor: `${section.color}20`, color: section.color }}>
                {section.icon}
              </div>
              <h3 className="text-lg font-semibold">{section.title}</h3>
            </div>
            <p className="text-sm opacity-70 mb-4">{section.description}</p>
            <div className="flex items-center text-sm group-hover:gap-2 transition-all" style={{ color: section.color }}>
              Explore <ChevronRight className="w-4 h-4" />
            </div>
          </button>
        ))}
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        <div className="text-center">
          <div className="text-2xl font-bold" style={{ color: colors.cyan }}>21</div>
          <div className="text-sm opacity-60">Average words in successful prompts</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold" style={{ color: colors.darkTeal }}>4</div>
          <div className="text-sm opacity-60">Essential components</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold" style={{ color: colors.oliveGreen }}>3</div>
          <div className="text-sm opacity-60">Key techniques to master</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold" style={{ color: colors.navy }}>∞</div>
          <div className="text-sm opacity-60">Possible applications</div>
        </div>
      </div>
    </div>
  );
};

// Basics Page Component
const BasicsPage = ({ darkMode, navigateTo, colors }) => {
  const [activeComponent, setActiveComponent] = useState('task');
  const cardBgClass = darkMode ? 'bg-[#00202c]' : 'bg-white';
  const borderClass = darkMode ? 'border-[#004D40]' : 'border-[#90A4AE]';

  const components = {
    task: {
      title: 'Task',
      description: 'The specific action you want the AI to perform',
      example: 'Generate a professional email response',
      tip: 'Start with action verbs like "Generate", "Write", "Analyze"',
      color: colors.cyan
    },
    context: {
      title: 'Context',
      description: 'Background information that helps AI understand your needs',
      example: 'For a customer complaint about delayed shipping',
      tip: 'Include audience, purpose, and any constraints',
      color: colors.darkTeal
    },
    examples: {
      title: 'Examples',
      description: 'References that show the desired output style',
      example: 'Following this email template: [sample]',
      tip: 'Show, don\'t just tell - provide samples when possible',
      color: colors.oliveGreen
    },
    format: {
      title: 'Format',
      description: 'How you want the output structured',
      example: 'As a 2-paragraph email with subject line',
      tip: 'Specify structure, length, and any special requirements',
      color: colors.navy
    }
  };

  return (
    <div className="space-y-8">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold mb-4">The Anatomy of a Great Prompt</h1>
        <p className="text-lg opacity-80">
          Every effective prompt contains these four essential components. Click each to learn more.
        </p>
      </div>

      {/* Interactive Component Selector */}
      <div className={`${cardBgClass} border ${borderClass} rounded-lg p-6`}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {Object.entries(components).map(([key, component]) => (
            <button
              key={key}
              onClick={() => setActiveComponent(key)}
              className={`p-4 rounded border transition-all ${
                activeComponent === key 
                  ? 'border-opacity-100 shadow-md' 
                  : 'border-opacity-40 hover:border-opacity-70'
              }`}
              style={{
                borderColor: component.color,
                backgroundColor: activeComponent === key ? `${component.color}10` : 'transparent'
              }}
            >
              <div className="text-center">
                <div className="font-medium" style={{ color: activeComponent === key ? component.color : undefined }}>
                  {component.title}
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="rounded p-6" style={{ backgroundColor: darkMode ? '#00202c' : '#f8fafc' }}>
          <h3 className="text-lg font-semibold mb-2" style={{ color: components[activeComponent].color }}>
            {components[activeComponent].title}
          </h3>
          <p className="mb-3 opacity-80">{components[activeComponent].description}</p>
          <div className="mb-3">
            <strong className="text-sm">Example:</strong>
            <div className={`${cardBgClass} border rounded p-2 mt-1 text-sm`} style={{ borderColor: colors.grayBlue }}>
              {components[activeComponent].example}
            </div>
          </div>
          <div className="text-sm">
            <strong>Pro Tip:</strong> {components[activeComponent].tip}
          </div>
        </div>
      </div>

      {/* Example Prompt */}
      <div className={`${cardBgClass} border ${borderClass} rounded-lg p-6`}>
        <h3 className="font-semibold mb-4">Complete Example</h3>
        <div className="font-mono text-sm rounded p-4 leading-6" style={{ backgroundColor: darkMode ? '#00202c' : '#f8fafc' }}>
          <span style={{ color: colors.cyan }}>[Generate a professional email response]</span>{' '}
          <span style={{ color: colors.darkTeal }}>for a customer complaint about delayed shipping</span>{' '}
          <span style={{ color: colors.oliveGreen }}>following the company's empathetic but professional tone</span>{' '}
          <span style={{ color: colors.navy }}>formatted as a 2-paragraph email with subject line</span>
        </div>
      </div>

      {/* Best Practices */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className={`${cardBgClass} border ${borderClass} rounded-lg p-6`}>
          <h3 className="font-semibold mb-4" style={{ color: colors.darkTeal }}>✅ Do</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 mt-0.5" style={{ color: colors.darkTeal }} />
              Be specific and clear
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 mt-0.5" style={{ color: colors.darkTeal }} />
              Provide relevant context
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 mt-0.5" style={{ color: colors.darkTeal }} />
              Use action verbs
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 mt-0.5" style={{ color: colors.darkTeal }} />
              Include examples when helpful
            </li>
          </ul>
        </div>
        <div className={`${cardBgClass} border ${borderClass} rounded-lg p-6`}>
          <h3 className="font-semibold mb-4" style={{ color: colors.oliveGreen }}>❌ Don't</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <div className="w-4 h-4 mt-0.5" style={{ color: colors.oliveGreen }}>✗</div>
              Use vague language
            </li>
            <li className="flex items-start gap-2">
              <div className="w-4 h-4 mt-0.5" style={{ color: colors.oliveGreen }}>✗</div>
              Make assumptions
            </li>
            <li className="flex items-start gap-2">
              <div className="w-4 h-4 mt-0.5" style={{ color: colors.oliveGreen }}>✗</div>
              Overload with information
            </li>
            <li className="flex items-start gap-2">
              <div className="w-4 h-4 mt-0.5" style={{ color: colors.oliveGreen }}>✗</div>
              Forget to specify format
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// Builder Page Component
const BuilderPage = ({ darkMode, navigateTo, colors }) => {
  const [prompt, setPrompt] = useState({
    task: '',
    context: '',
    examples: '',
    format: ''
  });
  const [generatedPrompt, setGeneratedPrompt] = useState('');
  const [copied, setCopied] = useState(false);
  
  const cardBgClass = darkMode ? 'bg-[#00202c]' : 'bg-white';
  const borderClass = darkMode ? 'border-[#004D40]' : 'border-[#90A4AE]';

  const buildPrompt = () => {
    const parts = [];
    if (prompt.task) parts.push(prompt.task);
    if (prompt.context) parts.push(prompt.context);
    if (prompt.examples) parts.push(prompt.examples);
    if (prompt.format) parts.push(`Format: ${prompt.format}`);
    
    setGeneratedPrompt(parts.join(' '));
  };

  const copyPrompt = async () => {
    if (generatedPrompt) {
      await navigator.clipboard.writeText(generatedPrompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const loadTemplate = (templatePrompt) => {
    setPrompt(templatePrompt);
    buildPrompt();
  };

  const templates = [
    {
      name: 'Email Response',
      prompt: {
        task: 'Write a professional email response',
        context: 'to a customer inquiry about product specifications',
        examples: 'using a helpful and knowledgeable tone',
        format: '2-3 paragraphs with greeting and signature'
      }
    },
    {
      name: 'Content Creation',
      prompt: {
        task: 'Create a social media post',
        context: 'announcing a new product launch for tech enthusiasts',
        examples: 'in the style of engaging tech brands',
        format: 'under 280 characters with relevant hashtags'
      }
    },
    {
      name: 'Analysis',
      prompt: {
        task: 'Analyze market trends',
        context: 'for renewable energy sector in 2024',
        examples: 'providing data-driven insights',
        format: 'bullet points with key findings and recommendations'
      }
    }
  ];

  return (
    <div className="space-y-8">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold mb-4">Interactive Prompt Lab</h1>
        <p className="text-lg opacity-80">
          Experiment and create perfect prompts step by step. Use our templates or build from scratch.
        </p>
      </div>

      {/* Quick Templates */}
      <div>
        <h3 className="font-semibold mb-4">Quick Start Templates</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {templates.map((template) => (
            <button
              key={template.name}
              onClick={() => loadTemplate(template.prompt)}
              className={`${cardBgClass} border ${borderClass} rounded p-4 text-left transition-all hover:shadow-md`}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = colors.cyan}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = darkMode ? colors.darkTeal : colors.grayBlue}
            >
              <div className="font-medium">{template.name}</div>
              <div className="text-xs mt-1" style={{ color: colors.cyan }}>Load Template</div>
            </button>
          ))}
        </div>
      </div>

      {/* Builder Form */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className={`${cardBgClass} border ${borderClass} rounded-lg p-6`}>
          <h3 className="font-semibold mb-4">Build Your Prompt</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Task <span style={{ color: colors.cyan }}>*</span>
              </label>
              <input
                type="text"
                value={prompt.task}
                onChange={(e) => setPrompt({...prompt, task: e.target.value})}
                placeholder="What do you want the AI to do?"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:border-opacity-100 transition-colors"
                style={{ 
                  borderColor: colors.grayBlue,
                  backgroundColor: darkMode ? '#00202c' : '#ffffff'
                }}
                onFocus={(e) => e.target.style.borderColor = colors.cyan}
                onBlur={(e) => e.target.style.borderColor = colors.grayBlue}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Context</label>
              <input
                type="text"
                value={prompt.context}
                onChange={(e) => setPrompt({...prompt, context: e.target.value})}
                placeholder="Provide background information..."
                className="w-full px-3 py-2 border rounded focus:outline-none focus:border-opacity-100 transition-colors"
                style={{ 
                  borderColor: colors.grayBlue,
                  backgroundColor: darkMode ? '#00202c' : '#ffffff'
                }}
                onFocus={(e) => e.target.style.borderColor = colors.cyan}
                onBlur={(e) => e.target.style.borderColor = colors.grayBlue}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Examples/Style</label>
              <input
                type="text"
                value={prompt.examples}
                onChange={(e) => setPrompt({...prompt, examples: e.target.value})}
                placeholder="Reference style or tone..."
                className="w-full px-3 py-2 border rounded focus:outline-none focus:border-opacity-100 transition-colors"
                style={{ 
                  borderColor: colors.grayBlue,
                  backgroundColor: darkMode ? '#00202c' : '#ffffff'
                }}
                onFocus={(e) => e.target.style.borderColor = colors.cyan}
                onBlur={(e) => e.target.style.borderColor = colors.grayBlue}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Format</label>
              <input
                type="text"
                value={prompt.format}
                onChange={(e) => setPrompt({...prompt, format: e.target.value})}
                placeholder="How should it be structured?"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:border-opacity-100 transition-colors"
                style={{ 
                  borderColor: colors.grayBlue,
                  backgroundColor: darkMode ? '#00202c' : '#ffffff'
                }}
                onFocus={(e) => e.target.style.borderColor = colors.cyan}
                onBlur={(e) => e.target.style.borderColor = colors.grayBlue}
              />
            </div>

            <button
              onClick={buildPrompt}
              className="w-full text-white py-3 px-4 rounded transition-all hover:opacity-90 font-medium"
              style={{ backgroundColor: colors.cyan }}
            >
              Generate Prompt
            </button>
          </div>
        </div>

        <div className={`${cardBgClass} border ${borderClass} rounded-lg p-6`}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Generated Prompt</h3>
            <button
              onClick={copyPrompt}
              disabled={!generatedPrompt}
              className="p-2 rounded transition-colors hover:opacity-80"
              style={{ color: colors.cyan }}
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
          
          <div className="min-h-[200px] p-4 rounded border" style={{ 
            backgroundColor: darkMode ? '#00202c' : '#f8fafc',
            borderColor: colors.grayBlue
          }}>
            {generatedPrompt || (
              <div className="text-center pt-16" style={{ color: colors.grayBlue }}>
                Your generated prompt will appear here...
              </div>
            )}
          </div>

          {generatedPrompt && (
            <div className="mt-4 text-sm" style={{ color: colors.cyan }}>
              Word count: {generatedPrompt.split(' ').length}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Techniques Page Component
const TechniquesPage = ({ darkMode, navigateTo, colors }) => {
  const [activeTechnique, setActiveTechnique] = useState('chain-of-thought');
  const cardBgClass = darkMode ? 'bg-[#00202c]' : 'bg-white';
  const borderClass = darkMode ? 'border-[#004D40]' : 'border-[#90A4AE]';

  const techniques = {
    'chain-of-thought': {
      title: 'Chain of Thought',
      description: 'Guide AI through step-by-step reasoning',
      example: `Let's think step by step:
1. First, identify the problem
2. Break it into smaller parts
3. Solve each part
4. Combine for the final answer`,
      bestFor: ['Math problems', 'Logic puzzles', 'Complex analysis'],
      color: colors.cyan
    },
    'few-shot': {
      title: 'Few-Shot Learning',
      description: 'Provide examples to establish patterns',
      example: `Translate English to French:
English: "Hello" → French: "Bonjour"
English: "Thank you" → French: "Merci"
English: "Goodbye" → French: ???`,
      bestFor: ['Pattern recognition', 'Style consistency', 'Format matching'],
      color: colors.darkTeal
    },
    'role-playing': {
      title: 'Role-Based Prompting',
      description: 'Assign specific expertise to the AI',
      example: `Act as a professional nutritionist.
Provide a meal plan for someone looking to build muscle.
Consider dietary restrictions and calorie requirements.`,
      bestFor: ['Expert advice', 'Specialized knowledge', 'Consistent perspective'],
      color: colors.oliveGreen
    }
  };

  return (
    <div className="space-y-8">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold mb-4">Advanced Techniques</h1>
        <p className="text-lg opacity-80">
          Master these three core techniques to dramatically improve your AI interactions.
        </p>
      </div>

      {/* Technique Selection */}
      <div className="flex flex-wrap gap-4">
        {Object.entries(techniques).map(([key, technique]) => (
          <button
            key={key}
            onClick={() => setActiveTechnique(key)}
            className={`px-4 py-2 rounded transition-all ${
              activeTechnique === key 
                ? 'text-white shadow-md' 
                : `${cardBgClass} border ${borderClass}`
            }`}
            style={{
              backgroundColor: activeTechnique === key ? technique.color : undefined,
              borderColor: activeTechnique === key ? technique.color : undefined
            }}
          >
            {technique.title}
          </button>
        ))}
      </div>

      {/* Technique Details */}
      <div className={`${cardBgClass} border ${borderClass} rounded-lg p-6`}>
        <h2 className="text-xl font-semibold mb-3" style={{ color: techniques[activeTechnique].color }}>
          {techniques[activeTechnique].title}
        </h2>
        <p className="text-lg opacity-80 mb-6">{techniques[activeTechnique].description}</p>
        
        <div className="space-y-6">
          <div>
            <h3 className="font-medium mb-2">Example:</h3>
            <pre className="rounded p-4 text-sm overflow-x-auto whitespace-pre-wrap" style={{ 
              backgroundColor: darkMode ? '#00202c' : '#f8fafc',
              border: `1px solid ${colors.grayBlue}`
            }}>
              {techniques[activeTechnique].example}
            </pre>
          </div>

          <div>
            <h3 className="font-medium mb-2">Best For:</h3>
            <div className="flex flex-wrap gap-2">
              {techniques[activeTechnique].bestFor.map((use, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 rounded-full text-sm"
                  style={{ 
                    backgroundColor: `${techniques[activeTechnique].color}20`,
                    color: techniques[activeTechnique].color
                  }}
                >
                  {use}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Practice Exercise */}
      <div className={`${cardBgClass} border ${borderClass} rounded-lg p-6`}>
        <h3 className="font-semibold mb-4">Practice Exercise</h3>
        <div className="rounded p-4" style={{ backgroundColor: `${colors.cyan}10` }}>
          <p className="font-medium mb-2">Try it yourself:</p>
          <p className="text-sm opacity-80">
            {activeTechnique === 'chain-of-thought' && "Ask AI to solve: 'If a train travels 60 mph for 2.5 hours, how far does it go?' Use step-by-step thinking."}
            {activeTechnique === 'few-shot' && "Create a few-shot prompt for converting temperatures from Celsius to Fahrenheit."}
            {activeTechnique === 'role-playing' && "Ask AI to act as a financial advisor and explain cryptocurrency basics."}
          </p>
        </div>
      </div>

      {/* Summary */}
      <div className={`${cardBgClass} border ${borderClass} rounded-lg p-6 text-center`}>
        <h3 className="font-semibold mb-2">Remember</h3>
        <p className="opacity-80">
          These techniques can be combined for even better results. Mix and match based on your specific needs.
        </p>
      </div>
    </div>
  );
};

export default PromptEngineeringGuide;
