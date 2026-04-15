"use client";

import OldReservationUIBackup from "../../components/contact/OldReservationUIBackup";

export default function OldReservationPage() {
  return (
    <div className="pt-32 min-h-screen bg-[#20064A]">
      <div className="text-center mb-8">
        <h1 className="text-white text-3xl font-el-messiri">Old Reservation UI Backup</h1>
        <p className="text-white/60 mt-2">This is the original form UI you had before the iframe was added.</p>
      </div>
      <OldReservationUIBackup />
    </div>
  );
}
