import React, { useState, ReactNode } from 'react';

interface CopyToClipboardProps {
    text: string;
    className?: string;
    children: ReactNode;
}

const CopyToClipboard: React.FC<CopyToClipboardProps> = ({ text, className, children }) => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 1000);

    };

    return (
        <div className="relative inline-block">
            <div
                onClick={copyToClipboard}
                className="cursor-pointer inline-block"
            >
                {children}
            </div>
            {copied && (
                <div className={`absolute bottom-3/4 left-1/2 transform -translate-x-1/2 fade-in-out-up ${className}`}>
                    Copied!
                </div>
            )}
        </div>
    );
};

export default CopyToClipboard;
