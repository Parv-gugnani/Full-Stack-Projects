"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

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
    return (
      <div className="pb-40">
        <div className="md:max-w-3xl lg:max-w-4xl mx-auto">DocumentId</div>
      </div>
    );
  }

  return <div>Document Id</div>;
};

export default DocumentIdPage;
