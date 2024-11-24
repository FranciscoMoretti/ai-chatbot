'use client';
import { useEffect, useRef, useState } from 'react';

import { TextRenderer } from '@/components/blocknote/blocknote-editor';

// Simulates streaming content
export function StreamingEditor({
  initialContent,
}: { initialContent: string }) {
  const [streamedContent, setStreamedContent] = useState('');
  //   total time counter (real)
  const chunkSize = 4;
  const interval = useRef<NodeJS.Timeout | null>(null);
  const index = useRef(0);

  useEffect(() => {
    interval.current = setInterval(() => {
      setStreamedContent(initialContent.slice(0, index.current * chunkSize));
      index.current++;
    }, 20);
  }, [initialContent]);

  return (
    <div className="h-screen w-full" data-registry="plate">
      <TextRenderer
        content={streamedContent}
        isEditing={false}
        isHovering={false}
        isInputVisible={false}
      />
    </div>
  );
}
