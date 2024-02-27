import React from "react";
import Header from "@/components/HomePage/Header";
import PostArea from "@/components/HomePage/PostArea";
import Footer from "@/components/HomePage/Footer";


export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <PostArea />

      <Footer />
    </React.Fragment>
  );
}
