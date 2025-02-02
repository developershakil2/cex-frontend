import { RoundPanel } from "../components/Panels/RoundPanel";

import { Navbar } from "../modules/Navbar";
import Sidebar from "../modules/Sidebar";
import Support from "../modules/Support/Support";
import Freq_Quez from "../modules/Support/Freq_Quez";

import { useState, useEffect } from "react";
import useStorage from "../modules/hook";

export default function SupportPage() {
  // ---------------------------------------------------------
  const { getItem } = useStorage();
  const wallet = getItem("wallet");
  var initVal = null;
  if (wallet) {
    initVal = JSON.parse(wallet);
  }
  const [accountAddress, setAccountAddress] = useState(initVal);
  // ---------------------------------------------------------

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="flex h-screen flex-col">
      <Navbar updateAccAddrs={setAccountAddress}></Navbar>
      <div className="mycontainer flex">
        <Sidebar></Sidebar>
        <div className="flex-shrink-1 py-6 w-3/5 mx-auto">
          <RoundPanel className="w-full">
            <Support />
          </RoundPanel>
          <br />
          <RoundPanel className="w-full">
            <Freq_Quez />
          </RoundPanel>
        </div>
      </div>
    </div>
  );
}
