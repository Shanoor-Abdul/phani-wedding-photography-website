"use client";

import { useState } from "react";
import supabase from "@/lib/supabaseClient";

export default function UploadManager() {
  const [type, setType] = useState("");
  const [title, setTitle] = useState("");
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);

  const handleUpload = async () => {
    if (!type) return alert("Select type");
    if (type === "album") {
      if (!title || files.length === 0) {
        return alert("Enter album name & select images");
      }

      setUploading(true);

      const folderName = title.toLowerCase().replace(/\s+/g, "-");
      let imageUrls = [];

      for (let file of files) {
        const fileName = Date.now() + "-" + file.name.replace(/\s+/g, "-");

        const path = `${folderName}/${fileName}`;

        const { error } = await supabase.storage
          .from("albums")
          .upload(path, file);

        if (error) {
          console.log(error);
          continue;
        }

        const { data } = supabase.storage.from("albums").getPublicUrl(path);

        imageUrls.push(data.publicUrl);
      }

      await supabase.from("albums").insert([
        {
          title,
          slug: folderName,
          cover_url: imageUrls[0] || "",
          images: imageUrls,
          date: new Date(),
        },
      ]);

      alert("Album created!");
      setUploading(false);
    }
    if (type === "photo") {
      if (files.length === 0) return alert("Select file");

      setUploading(true);

      const file = files[0];
      const fileName = Date.now() + "-" + file.name;

      const { error } = await supabase.storage
        .from("photos")
        .upload(fileName, file);

      if (error) {
        console.log(error);
        alert("Upload failed");
        setUploading(false);
        return;
      }

      const { data } = supabase.storage.from("photos").getPublicUrl(fileName);

      await supabase.from("photos").insert([
        {
          title: file.name,
          image_url: data.publicUrl,
        },
      ]);

      alert("Photo uploaded!");
      setUploading(false);
    }

    if (type === "video") {
      if (files.length === 0) return alert("Select file");

      setUploading(true);

      const file = files[0];

      const fileName = Date.now() + "-" + file.name.replace(/\s+/g, "-");

      const { error: uploadError } = await supabase.storage
        .from("Videos")
        .upload(fileName, file);

      if (uploadError) {
        console.log("Storage error:", uploadError);
        alert("Video upload failed");
        setUploading(false);
        return;
      }

      const { data } = supabase.storage.from("Videos").getPublicUrl(fileName);

      const { error: dbError } = await supabase.from("videos").insert([
        {
          title: file.name,
          video_url: data.publicUrl,
        },
      ]);

      if (dbError) {
        console.log("DB error:", dbError);
        alert("Failed to save video in DB");
        setUploading(false);
        return;
      }

      alert("Video uploaded!");
      setUploading(false);
    }
    if (type === "service") {
      if (files.length === 0) return alert("Select file");

      if (!title) return alert("Enter service title");

      const description = prompt("Enter service description");

      if (!description) return alert("Enter description");

      setUploading(true);

      const file = files[0];

      const fileName = Date.now() + "-" + file.name.replace(/\s+/g, "-");

      const { error } = await supabase.storage
        .from("services")
        .upload(fileName, file);

      if (error) {
        console.log(error);
        alert("Upload failed");
        setUploading(false);
        return;
      }

      const { data } = supabase.storage.from("services").getPublicUrl(fileName);

      await supabase.from("services").insert([
        {
          title,
          description,
          image_url: data.publicUrl,
        },
      ]);

      alert("Service uploaded!");
      setUploading(false);
    }
    setType("");
    setTitle("");
    setFiles([]);
  };

  return (
    <div className="space-y-4 p-6 border rounded-lg">
      <select
        value={type}
        onChange={(e) => {
          setType(e.target.value);
          setTitle("");
          setFiles([]);
        }}
        className="border p-2 w-full"
      >
        <option value="">Select Type</option>
        <option value="photo">Photo</option>
        <option value="album">Album</option>
        <option value="video">Video</option>
        {/* <option value="service">Service</option> */}
      </select>

      {type === "album" && (
        <input
          type="text"
          placeholder="Enter Album Name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 w-full"
        />
      )}

      <input
        type="file"
        multiple={type === "album"}
        onChange={(e) => setFiles(Array.from(e.target.files))}
      />

      <button
        onClick={handleUpload}
        disabled={uploading}
        className="bg-black text-white p-2 w-full"
      >
        {uploading ? "Uploading..." : "Upload"}
      </button>
    </div>
  );
}
