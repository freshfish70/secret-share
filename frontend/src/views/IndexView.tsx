import React, { useState } from "react";
import CreateShare from "../containers/CreateShare";
import ShareInformation from "../containers/ShareInformation";
import { ShareDetails } from "../lib/share/ShareDetails";
import ContentBox from "../components/ContentBox";

/**
 * This is the default view when accessing this frontend.
 */
export default function IndexView() {
  const [shareDetails, setShareDetails] = useState<undefined | ShareDetails>();
  // {
  //   bucketId: "c8cca98e-66fa-4644-a516-e3f32e4f1a9a",
  //   passphrase: "128371287fwerkwher",
  //   submissionId: "c8cca98e-66fa-4644-a516-e3f32e4f1a9a",
  //   retrievalPassphrase: "32u4DSF45DFgwerwer",
  // }
  const onShareCreated = (newShareDetails: ShareDetails): void => {
    setShareDetails(newShareDetails);
  };

  return (
    <ContentBox>
      {(shareDetails && <ShareInformation shareDetails={shareDetails} />) || (
        <div className="h-96">
          <CreateShare onCreated={onShareCreated} />
        </div>
      )}
    </ContentBox>
  );
}
