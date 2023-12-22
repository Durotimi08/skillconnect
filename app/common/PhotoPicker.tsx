"use client";
import React, { useState } from "react";
import { createPortal } from "react-dom";

export default function PhotoPicker({onChange} :any) {
  const [portalElement, setPortalElement] = useState<Element | null>(document.getElementById("photo-picker-element"));

  return portalElement 
  ? createPortal(<input type="file" hidden id="photo-picker" onChange={onChange}/>, portalElement ) 
  : null
}