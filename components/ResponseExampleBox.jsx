import { useState } from "react";
import { Copy, Check } from "lucide-react";

export const ResponseExampleBox = ({
  title,
  examples, // { [key]: { label, description, response } }
  defaultKey = "success"
}) => {
  const [selectedKey, setSelectedKey] = useState(defaultKey);
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

  const current = examples[selectedKey];

  return (
    <div className="bg-[#699EC7] rounded my-8 md:mb-4">
      <div className="bg-[#136AB7] flex flex-row justify-around sm:justify-between items-center rounded-t">
        <div className="w-2/4 py-2 sm:px-2">
          <h2 className="text-sm text-[#F2F2F2]">{title}:</h2>
        </div>
        <div className="w-2/6 flex justify-end items-center gap-2 md:mr-2">
          <select
            className="bg-[#699EC7] rounded text-[#F2F2F2] p-1"
            value={selectedKey}
            onChange={e => setSelectedKey(e.target.value)}
          >
            {Object.entries(examples).map(([key, ex]) => (
              <option key={key} value={key}>
                {ex.label}
              </option>
            ))}
          </select>
          <button
            onClick={() => handleCopy(current.response)}
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
      <div className="overflow-x-auto code-scrollbar px-4 py-2 text-sm text-[#F2F2F2]">
        <div className="mb-2">{current.description}</div>
        <pre>{current.response}</pre>
      </div>
    </div>
  );
}; 