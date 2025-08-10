"use client";

import dynamic from "next/dynamic";

const MapView = dynamic(() => import("./Map"), {
  ssr: false,
});

export default MapView;
