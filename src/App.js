import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      <div className='qustion'>
        <h1>1/  How React Work ?</h1>
        <p>Answer: রিয়াক্ট মূলত বড় একটা ওয়েবসাইট কে ছোট ছোট অংশে বিভক্ত করে | <br /> বড় ওয়েবসাইটটিকে ছোট ছোট কম্পলটে বিভক্ত করে আর <br /> এই জন্যই কম্পোনেন্টগুলো আলেদা আলেদা ফাইলে রাখা হয় ওয়েবসাইট <br /> ব্যবহার করতে সুবিধা হয় এবং খুব দ্রুত কাজ করে| </p> <br /> <br />

        <h1> 2/   Props vs Stats </h1>
        <p>প্রপগুলি এক উপাদান থেকে অন্য উপাদানে ডেটা প্রেরণ <br /> করতে ব্যবহৃত হয়। রাজ্য হল একটি স্থানীয় ডেটা সঞ্চয়স্থান যা <br /> শুধুমাত্র উপাদানগুলির জন্য স্থানীয় এবং <br /> অন্যান্য উপাদানগুলিতে প্রেরণ করা যায় না।</p >
      </div >

    </div >
  );
}

export default App;
