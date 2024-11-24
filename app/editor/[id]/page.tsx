import { getDocumentById } from '@/lib/db/queries';
import { StreamingEditor } from '../../../components/streamingEditor';

// Page to playground editor streaming
export default async function Page(props: { params: Promise<{ id: string }> }) {
  const documentId = '64ed9ca0-f871-414e-90ea-11b9438d19d1';
  const document = await getDocumentById({ id: documentId });

  if (!document) {
    return <div>Document not found</div>;
  }
  // Convert to client component
  return <StreamingEditor initialContent={document.content ?? ''} />;
}
