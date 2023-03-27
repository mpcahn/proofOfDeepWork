import React from "react";
import WorkForm from "./WorkForm";

export default function collectionModal() {
  return (
    <div>
      <label
        htmlFor="collection-modal"
        className="btn btn-primary btn-sm px-2 rounded-full font-normal space-x-2 normal-case"
      >
        <span>CREATE NEW PoDW</span>
      </label>
      <input type="checkbox" id="collection-modal" className="modal-toggle" />
      <label htmlFor="collection-modal" className="modal cursor-pointer">
        <label className="modal-box relative">
          {/* dummy input to capture event onclick on modal box */}
          <input className="h-0 w-0 absolute top-0 left-0" />
          <h3 className="text-xl font-bold mb-3">New NFT</h3>
          <label htmlFor="collection-modal" className="btn btn-ghost btn-sm btn-circle absolute right-3 top-3">
            ✕
          </label>
          <div className="space-y-3">
            <div className="flex-center space-x-4">
              <WorkForm />
            </div>
          </div>
        </label>
      </label>
    </div>
  );
}
