"use client";

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MdArrowOutward } from "react-icons/md";

// تنظیم آیکون پیش‌فرض Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "/leaflet/images/./marker-icon-2x.png",
  iconUrl: "/leaflet/images/./marker-icon.png",
  shadowUrl: "/leaflet/images/marker-shadow.png",
});

export default function MapView() {
  const position = [35.6892, 51.389]; // تهران

  return (
    <div className="relative h-[80dvh] w-full">
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>تهران</Popup>
        </Marker>
      </MapContainer>

      <div
        className="pointer-events-auto absolute top-1/6 right-10 hidden h-[20rem] w-[23rem] flex-col gap-4 rounded-3xl bg-stone-50 p-10 md:flex lg:right-32 xl:h-[20rem] xl:w-[28rem]"
        style={{ zIndex: 10000 }}
      >
        <h4 className="text-3xl font-bold"> Ecomus Store </h4>

        <div>
          <p>301 Front St W Toronto, Canada</p>
          <p>support@ecomus.com</p>
          <p>(08) 8942 1299</p>
        </div>
        <div>
          <p>Mon - Fri, 8:30am - 10:30pm</p>
          <p>Saturday, 8:30am - 10:30pm</p>
          <p>Sunday Closed</p>
        </div>
        <li className="flex cursor-pointer hover:border-b-primary hover:text-primary">
          Get direction
          <MdArrowOutward size={18} />
        </li>
      </div>
    </div>
  );
}
