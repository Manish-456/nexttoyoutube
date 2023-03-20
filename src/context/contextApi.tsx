import { createContext, useEffect, useState } from "react";
import { fetchDataFromAPI } from "../utils/api";

type ChildrenProps = {
  children: React.ReactNode;
};
export interface VideoData {
  type?: string;
  video: {
    author: {
      avatar: {
        height: number;
        url: string;
        width: number;
      }[];
      badges: {
        text: string;
        type: string;
      }[];
      stats : {
        subscribers? : number,
        subscribersText? : string
      }
      canonicalBaseUrl: string;
      channelId: string;
      title: string;
    };
    badges: string[];
    descriptionSnippet: null;
    isLiveNow: boolean;
    lengthSeconds: number;
    movingThumbnails: null;
    publishedTimeText: string;
    stats: {
      views: number;
      likes : number,
      comments : number
    };
    thumbnails: {
      height: number;
      url: string;
      width: number;
    }[];
    title: string;
    videoId: string;
  };
}



export type Data = VideoData[];


export interface ApiContextProps {
  loading: boolean;
  setLoading: (value: boolean) => void;
  searchResult: Data;
  setSearchResult: (value: Data) => void;
  mobileMenu: boolean;
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
  setMobileMenu: (value: boolean) => void;
}
export const ApiContext = createContext<ApiContextProps>({
  loading: false,
  setLoading: () => {},
  searchResult: [],
  selectedCategory: "",
  setSelectedCategory: () => {},
  setSearchResult: () => {},
  mobileMenu: false,
  setMobileMenu: () => {},
});

export const ApiContextProvider = ({ children }: ChildrenProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [searchResult, setSearchResult] = useState<Data>([]);
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);

  const fetchSelectedCategoryData = async (query: string) => {
    setLoading(true);
    fetchDataFromAPI(`search/?q=${query}`).then(({ contents} ) => {
     
      setSearchResult(contents);
      setLoading(false);
    });
  };
  useEffect(() => {
 
      fetchSelectedCategoryData(selectedCategory);
  
  }, [selectedCategory]);
  return (
    <ApiContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        loading,
        setLoading,
        searchResult,
        setSearchResult,
        mobileMenu,
        setMobileMenu,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};
