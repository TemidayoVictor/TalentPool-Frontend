"use client";
import React, {useState} from "react";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const CategorySide = () => {
    const [category, setCategory] = useState(false);
    const toggleCategory = () => {
        setCategory(prev => !prev);
      };
      
    return (
        <div className="category-side border rounded-lg xl:shadow-sm">
            <div className="font-bold border-[#a5a5a5] p-3 cat-title flex">
                <h1 className="text-3xl">Categories</h1>
                <FontAwesomeIcon icon={faCaretDown} className="h-[22px] w-[22px]" onClick={toggleCategory}/>
            </div>
            <div className={`p-3 ${!category ? 'hidden' : ''}`}>
                <Link href="#" className="category-link">Engineering</Link>
                <Link href="#" className="category-link">Accountancy</Link>
                <Link href="#" className="category-link">Architecture</Link>
                <Link href="#" className="category-link">Data Science</Link>
                <Link href="#" className="category-link">Agriculture</Link>
                <Link href="#" className="category-link">Programming</Link>
            </div>
        </div>
    )
}

export default CategorySide