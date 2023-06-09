import Head from "next/head";
import { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import PostCard from "@/components/PostCard";
import PostFormCard from "@/components/PostFormCard";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Login from "./Login";
import TimeAgo from "javascript-time-ago";

import en from "javascript-time-ago/locale/en.json";
import { UserContext } from "@/context/UserContext";

TimeAgo.addDefaultLocale(en);

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const supabase = useSupabaseClient();
  const session = useSession();
  const [posts, setPosts] = useState([]);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetchPosts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  
  useEffect(() => {
    if(!session?.user?.id) {
      return;
    }
    supabase
      .from("profiles")
      .select()
      .eq("id", session.user.id)
      .then((result) => {
        if (result.data.length) {
          setProfile(result.data[0]);
        }
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session?.user?.id]);

  const fetchPosts = () => {
    supabase
      .from("posts")
      .select("id, content, created_at, photos, profiles(id, avatar, name)").is('parent',null)
      .order("created_at", { ascending: false })
      .then((result) => {
        setPosts(result.data);
      });
  };

  if (!session) {
    return <Login />;
  }
  return (
    <>
      <Head>
        <title>Social Media</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <UserContext.Provider value={{profile}}>
          <PostFormCard onPost={fetchPosts} />
          {posts?.length > 0 &&
            posts.map((post) => <PostCard {...post} key={post.created_at} />)}
        </UserContext.Provider>
      </Layout>
    </>
  );
}
