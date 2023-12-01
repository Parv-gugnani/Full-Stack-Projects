"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { Toolbar } from "@/components/toolbar";
import { Cover } from "@/components/cover";
import Editor from "@/components/editor";

interface DocumentIdPage {
  params: {
    documentId: Id<"documents">;
  };
}

const DocumentIdPage = ({ params }: DocumentIdPage) => {
  const document = useQuery(api.documents.getById, {
    documentId: params.documentId,
  });

  if (document === undefined) {
    <div>Loading....</div>;
  }

  if (document === null) {
    return <div>Not found</div>;
  }

  return (
    <div className="pb-40">
      <Cover url={document?.coverImage} />
      <div className="md:max-w-3xl lg:max-w-4xl mx-auto">
        page
        {/* <Toolbar initialData={document} />
        <Editor onChange={onChange} initialContent={document.content} /> */}
      </div>
    </div>
  );
};

export default DocumentIdPage;
