import { createContext, useContext, useState } from "react";
import { Copy, Check } from "lucide-react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("Bash");

  return (
    <LanguageContext.Provider value={{ selectedLanguage, setSelectedLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

// Componente global para las cajas de código
export const CodeExampleBox = ({ 
  title, 
  languageData, 
  content, 
  showLanguageSelector = true 
}) => {
  const { selectedLanguage, setSelectedLanguage } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const getDisplayContent = () => {
    if (content) return content;
    return languageData[selectedLanguage]?.description || "";
  };

  return (
    <div className="bg-[#699EC7] rounded my-8 md:mb-4">
      <div className="bg-[#136AB7] flex flex-row justify-around sm:justify-between items-center rounded-t">
        <div className="w-2/4 py-2 sm:px-2">
          <h2 className="text-sm text-[#F2F2F2]">{title}:</h2>
        </div>
        <div className="w-2/6 flex justify-end items-center gap-2 md:mr-2">
          {showLanguageSelector && languageData && (
            <select
              className="bg-[#699EC7] rounded text-[#F2F2F2] p-1"
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
            >
              {Object.keys(languageData).map((lang) => (
                <option key={lang} value={lang}>
                  {lang}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={() => handleCopy(getDisplayContent())}
            className="p-1 hover:bg-[#699EC7] rounded transition-colors duration-200"
          >
            {copied ? (
              <Check className="h-4 w-4 text-green-500" />
            ) : (
              <Copy className="h-4 w-4 text-[#F2F2F2]" />
            )}
          </button>
        </div>
      </div>
      <div className="overflow-x-auto code-scrollbar px-4 py-2 flex text-sm text-[#F2F2F2]">
        <pre>{getDisplayContent()}</pre>
      </div>
    </div>
  );
};
