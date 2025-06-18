import React, { useState, useEffect, useRef, JSX } from 'react';

const allTags = [
  'Land',
  'Flat',
  'Buildings',
  'Physical Currency',
  'Patents',
  'Inventory',
  'Trademark',
  'Raw Materials',
  'Machineries',
];

const assetTags = new Set(allTags);

const languageOptions = [
  { label: 'English', code: 'en-US' },
  { label: 'Hindi', code: 'hi-IN' },
  { label: 'Marathi', code: 'mr-IN' },
  { label: 'Maithili', code: 'mai-IN' },
];

export default function AssetTagsPage(): JSX.Element {
  const [lang, setLang] = useState<string>('');
  const [muted, setMuted] = useState<boolean>(false);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [submitted, setSubmitted] = useState<boolean>(false);

  const synthRef = useRef<SpeechSynthesis | null>(typeof window !== 'undefined' ? window.speechSynthesis : null);

  const speak = (text: string) => {
    if (muted || !synthRef.current) return;
    const u = new SpeechSynthesisUtterance(text);
    u.lang = lang;
    synthRef.current.cancel();
    synthRef.current.speak(u);
  };

  useEffect(() => {
    if (!lang) return;

    const promptMap: Record<string, string> = {
      'en-US': 'Hey user, which of the following you have heard or are aware of by any means?',
    };

    speak(promptMap[lang] || promptMap['en-US']);
  }, [lang]);

  const handleLangChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLang(e.target.value);
    setSubmitted(false);
    setSelected(new Set());
  };

  const toggleTag = (tag: string) => {
    if (submitted) return;
    const next = new Set(selected);
    next.has(tag) ? next.delete(tag) : next.add(tag);
    setSelected(next);
  };

  const handleSubmit = () => {
    setSubmitted(true);
    const assets = allTags.filter(t => assetTags.has(t) && selected.has(t));
    const listStr = assets.join(', ');

    const feedbackMap: Record<string, string> = {
      'en-US': `You selected ${listStr}. These are your assets.`,
      'hi-IN': `आपने चुना ${listStr}. ये आपके परिसंपत्तियाँ हैं।`,
      'mr-IN': `आपण निवडले ${listStr}. ही तुमची मालमत्ता आहेत.`,
      'mai-IN': `अपने चुनलहुँ ${listStr}. ई अहाँक संपत्ति छी।`,
    };

    speak(feedbackMap[lang] || feedbackMap['en-US']);
  };

  return (
    <div className="p-6 max-w-md mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <label className="mr-2 font-medium">Language:</label>
          <select
            value={lang}
            onChange={handleLangChange}
            className="border rounded px-2 py-1"
          >
            <option value="">Select</option>
            {languageOptions.map(opt => (
              <option key={opt.code} value={opt.code}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={() => setMuted(prev => !prev)}
          className="px-3 py-1 border rounded"
        >
          {muted ? 'Unmute' : 'Mute'}
        </button>
      </div>

      {lang && (
        <>
          <h2 className="text-xl font-semibold">
            which of the following you have heard or are aware of by any means?
          </h2>

          <div className="flex flex-wrap gap-2">
            {allTags.map(tag => {
              const isSel = selected.has(tag);
              const isAsm = assetTags.has(tag);
              const bg = isSel
                ? isAsm
                  ? 'bg-green-100 border-green-500 text-black'
                  : 'bg-blue-100 border-blue-500 text-black'
                : 'bg-gray-100 border-gray-300 text-black';
              return (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`px-3 py-1 rounded-full border ${bg}`}
                >
                  {tag}
                </button>
              );
            })}
          </div>

          {!submitted ? (
            <button
              onClick={handleSubmit}
              className="mt-4 px-4 py-2 bg-blue-600 text-black rounded"
            >
              Submit
            </button>
          ) : (
            <div className="mt-4 p-4 border border-green-500 bg-green-50 rounded text-black">
              <p className="font-medium mb-2">These are your assets:</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {allTags
                  .filter(t => assetTags.has(t) && selected.has(t))
                  .map(t => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded border border-green-500 bg-green-100"
                    >
                      {t}
                    </span>
                  ))}
              </div>
              <p>
                <strong>Definition:</strong> Assets are resources owned by an
                individual or business that have economic value and can provide
                future benefit. Examples include land, buildings, flat
                property, and physical currency.
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
}
