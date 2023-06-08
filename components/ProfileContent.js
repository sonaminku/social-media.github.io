/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import FriendInfo from "@/components/FriendInfo";
import PostCard from "@/components/PostCard";
import Card from "./Card";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

const ProfileContent = ({ activeTab, userId }) => {
  const [posts, setPosts] = useState([]);
  const [profile, setProfile] = useState(null)
  const supabase = useSupabaseClient();

  useEffect(() => {
    if (!userId) {
      return;
    }
    if(activeTab === 'posts') {
        loadPosts().then(() => {})
    }
  }, [userId]);

  const loadPosts = async() => {
    const posts = await userPosts(userId)
    const profile = await userProfile(userId)
    setPosts(posts)
    setProfile(profile)
  }

  const userPosts = async(userId) => {
    const {data} = await supabase
      .from("posts")
      .select("id, content, created_at, author")
      .eq("author", userId)
    return data;
  }

  const userProfile = async(userId) => {
    const {data} = await supabase
      .from("profiles")
      .select()
      .eq("id", userId)
    return data[0];
  }

  return (
    <div>
      {activeTab === "posts" && (
        <div>
          {posts?.length > 0 && posts.map(post => (
            <PostCard key={post.created_at} {...post} profiles={profile} />
          ))}
        </div>
      )}
      {activeTab === "about" && (
        <div>
          <Card>
            <h2 className="text-3xl mb-2">About me</h2>
            <p className="mb-2 text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Provident nam deleniti voluptatum tempora iusto ducimus
              asperiores, repudiandae rerum quas voluptas repellat, nulla, error
              reprehenderit itaque fuga similique perspiciatis dolorum odit.
            </p>
            <p className="mb-2 text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Provident nam deleniti voluptatum tempora iusto ducimus
              asperiores, repudiandae rerum quas voluptas repellat, nulla, error
              reprehenderit itaque fuga similique perspiciatis dolorum odit.
            </p>
          </Card>
        </div>
      )}
      {activeTab === "friends" && (
        <div>
          <Card>
            <h2 className="text-3xl mb-2">Friends</h2>
            <div className="">
              <div className="border-b border-b-gray-100 p-4 -m-4">
                <FriendInfo />
              </div>
              <div className="border-b border-b-gray-100 p-4 -m-4">
                <FriendInfo />
              </div>
              <div className="border-b border-b-gray-100 p-4 -m-4">
                <FriendInfo />
              </div>
              <div className="border-b border-b-gray-100 p-4 -m-4">
                <FriendInfo />
              </div>
              <div className="border-b border-b-gray-100 p-4 -m-4">
                <FriendInfo />
              </div>
              <div className="border-b border-b-gray-100 p-4 -m-4">
                <FriendInfo />
              </div>
              <div className="border-b border-b-gray-100 p-4 -m-4">
                <FriendInfo />
              </div>
              <div className="border-b border-b-gray-100 p-4 -m-4">
                <FriendInfo />
              </div>
            </div>
          </Card>
        </div>
      )}
      {activeTab === "photos" && (
        <div>
          <Card>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-md overflow-hidden h-48 flex items-center shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1601581875039-e899893d520c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                  alt=""
                />
              </div>
              <div className="rounded-md overflow-hidden h-48 flex items-center shadow-md">
                <img
                  src="https://plus.unsplash.com/premium_photo-1668155006607-90b0ee71a3c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                  alt=""
                />
              </div>
              <div className="rounded-md overflow-hidden h-48 flex items-center shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1518557984649-7b161c230cfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                  alt=""
                />
              </div>
              <div className="rounded-md overflow-hidden h-48 flex items-center shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                  alt=""
                />
              </div>
              <div className="rounded-md overflow-hidden h-48 flex items-center shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1598395927056-8d895e701c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                  alt=""
                />
              </div>
              <div className="rounded-md overflow-hidden h-48 flex items-center shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                  alt=""
                />
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default ProfileContent;
