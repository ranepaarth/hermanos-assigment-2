"use client";

import { UploadButton } from "@/lib/uploadthing";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import "@cyntler/react-doc-viewer/dist/index.css";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { useRouter } from "next/navigation";
import React from "react";

const UploadResumeForm = ({ resumeUrl }: { resumeUrl: string }) => {
  const docs = [{ uri: resumeUrl }];

  const router = useRouter();

  return (
    <div className="w-full flex flex-col items-center gap-2 border border-blue-800 p-4 rounded-md">
      <h3 className="text-xl font-bold text-blue-800 mb-8 border-b-blue-900 border-b-2">
        Your Resume
      </h3>

      {resumeUrl && (
        <div className="w-full max-w-full ">
          <DocViewer
            documents={docs}
            pluginRenderers={DocViewerRenderers}
            style={{ width: "100%", height: "80%" }}
            config={{
              header: {
                disableFileName: true,
                disableHeader: true,
              },
              pdfZoom: {
                defaultZoom: 1.2,
                zoomJump: 0,
              },
            }}
          />
        </div>
      )}

      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          router.refresh();
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
    </div>
  );
};

export default UploadResumeForm;
