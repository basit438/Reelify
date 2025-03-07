"use client";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { LoaderIcon, Sparkle } from "lucide-react";
import axios from "axios";

function Topic({ handleFormSubmit }) {
  const topicSuggestions = [
    "innovation",
    "Mythology",
    "History",
    "Science",
    "Technology",
    "Art",
    "Music",
    "Dance",
    "Cooking",
    "Travel",
    "Fashion",
    "Sports",
    "Fitness",
    "Health",
    "Lifestyle",
    "Education",
    "Entertainment",
    "Comedy",
    "Drama",
    "Horror",
    "Romance",
    "Thriller",
    "Action",
    "Adventure",
    "Mystery",
    "Fantasy",
    "Documentary",
    "Biography",
    "Autobiography",
    "Self-help",
    "Motivation",
    "Inspiration",
    "Spirituality",
    "Religion",
    "Philosophy",
    "Psychology",
  ];

  const [selectedTopic, setSelectedTopic] = useState();
  const [tabValue, setTabValue] = useState("suggestions");
  const [scripts, setScripts] = useState();
  const [loading, setLoading] = useState(false);
  const GenerateScript = async () => {
    setLoading(true);
    try {
      const result = await axios.post("/api/generate-script", {
        topic: selectedTopic,
      });
  
      console.log(result.data);
      setScripts(result.data?.scripts);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <div>
      <h2 className="font-bold mb-2">Project Title</h2>
      <Input
        onChange={(e) => handleFormSubmit("title", e.target.value)}
        placeholder="Enter project title"
      />
      <div className="mt-5">
        <h2 className="font-bold mb-2">Video Topic</h2>
        <p className="text-sm text-muted-foreground mb-2">
          Select a topic for your video
        </p>
        <Tabs value={tabValue} onValueChange={setTabValue} className="w-full">
          <TabsList>
            <TabsTrigger value="suggestions">Suggestions</TabsTrigger>
            <TabsTrigger value="your_topic">Your Topic</TabsTrigger>
          </TabsList>

          <TabsContent value="suggestions">
            <div className="">
              {topicSuggestions.map((topic, index) => (
                <Button
                  className={
                    selectedTopic === topic ? "bg-gray-700 text-white" : "m-1"
                  }
                  variant={"outline"}
                  key={index}
                  onClick={() => {
                    setSelectedTopic(topic);
                    handleFormSubmit("topic", topic);
                  }}
                >
                  {topic}
                </Button>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="your_topic">
            <Textarea
              onChange={(e) => handleFormSubmit("topic", e.target.value)}
            />
          </TabsContent>
        </Tabs>

        <div>
          <h2 className="mt-3 font-bold" >Select a script</h2>
          {scripts?.map((script, index) => (
            <div key={index} className="mt-5">
              <h2 className="font-bold mb-2">Script {index + 1}</h2>
              <Textarea value={script.content} readOnly />
            </div>
          ))}
        </div>
      </div>
      <Button onClick={GenerateScript} className="mt-5" disabled={!selectedTopic || loading}>
        
      {loading ? (
        <LoaderIcon className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        <Sparkle className="mr-2 h-4 w-4" />
      )}
      Generate
    </Button>
    </div>
  );
}
export default Topic;
