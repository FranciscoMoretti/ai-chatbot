'use client';
import { useEffect, useRef, useState } from 'react';

import { TextRenderer } from '@/components/blocknote/blocknote-editor';

// Simulates streaming content
export function StreamingEditor({
  initialContent,
}: { initialContent: string }) {
  const [streamedContent, setStreamedContent] = useState('');
  //   total time counter (real)
  const totalTimeStart = useRef(Date.now());
  const totalTimeEnd = useRef(0);
  const chunkSize = 4;
  // WE have an interval of 100ms in which we increatse an chunk (index)
  // Based on the index, we set streamedContent to a i*chunksize slice of initialContent

  const interval = useRef<NodeJS.Timeout | null>(null);
  const index = useRef(0);

  useEffect(() => {
    interval.current = setInterval(() => {
      setStreamedContent(initialContent.slice(0, index.current * chunkSize));
      index.current++;
    }, 20);

    // update total time counter
    totalTimeEnd.current = Date.now();
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
