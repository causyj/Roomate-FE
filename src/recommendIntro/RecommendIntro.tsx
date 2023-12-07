import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { Button } from "../components/common";
import { useNavigate } from "react-router-dom";
import { Loading } from "../components/Loading";
import { useState } from "react";
const departments = [
    { value: '비공개', label: '비공개' },
    { value: '인문대학', label: '인문대학' },
    { value: '사회과학대학', label: '사회과학대학' },
    { value: '사범대학', label: '사범대학' },
    { value: '자연과학대학', label: '자연과학대학' },
    { value: '생명공학대학', label: '생명공학대학' },
    { value: '공학대학', label: '공학대학' },
    { value: '창의ICT공과대학', label: '창의ICT공과대학' },
    { value: '소프트웨어대학', label: '소프트웨어대학' },
    { value: '의과대학', label: '의과대학' },
    { value: '약학대학', label: '약학대학' },
    { value: '적십자간호대학', label: '적십자간호대학' },
    { value: '예술대학', label: '예술대학' },
    { value: '예술공학대학', label: '예술공학대학' },
    { value: '체육대학', label: '체육대학' },
    // ... 다른 학과들을 추가할 수 있습니다.
  ];
  const mbtis = [
    { value: '비공개', label: '비공개' },
    { value: 'ENFP', label: 'ENFP' },
    { value: 'ENFJ', label: 'ENFJ' },
    { value: 'ENTP', label: 'ENTP' },
    { value: 'ENTJ', label: 'ENTJ' },
    { value: 'ESFP', label: 'ESFP' },
    { value: 'ESFJ', label: 'ESFJ' },
    { value: 'ESTP', label: 'ESTP' },
    { value: 'ESTJ', label: 'ESTJ' },
    { value: 'INFP', label: 'INFP' },
    { value: 'INFJ', label: 'INFJ' },
    { value: 'INTP', label: 'INTP' },
    { value: 'INTJ', label: 'INTJ' },
    { value: 'ISFP', label: 'ISFP' },
    { value: 'ISFJ', label: 'ISFJ' },
    { value: 'ISTP', label: 'ISTP' },
    { value: 'ISTJ', label: 'ISTJ' },
    // ... 다른 학과들을 추가할 수 있습니다.
  ];
export const RecommendIntro = () => {
     const [dorm, setDorm] = useState('');
     const [dorm_num, setDormNUM] = useState(0);
     const [room, setRoom] = useState('');
     const [room_num, setRoomNUM] = useState(0);
     
     const [dept, setDept] = useState('');
     const [stu_num, setStu_num] = useState('');
     const [stu_NUM, setStu_NUM] = useState(0);
     const [age, setAge] = useState('');
     const [age_num, setAge_num] = useState(0);
     const [mbti, setMbti] = useState('');
     const [loading, setLoading] = useState(false);



     const [dormValid, setDormValid] = useState(false);
     const [roomValid, setRoomValid] = useState(false);
     const [deptValid, setDeptValid] = useState(false);
     const [stuNumValid, setStuNumValid] = useState(false);
     const [ageValid, setAgeValid] = useState(false);
     const [mbtiValid, setMbtiValid] = useState(false);
     const handledormChange = (event: SelectChangeEvent) => {
    setDorm(event.target.value as string);
    setDormNUM(parseInt(dorm));
    setDormValid(event.target.value as string !== ''); 
  };
  const handleroomChange = (event: SelectChangeEvent) => {
    setRoom(event.target.value as string);
    setRoomNUM(parseInt(room));
    setRoomValid(event.target.value as string !== ''); 
  };
  const handledeptChange = (event: SelectChangeEvent) => {
    setDeptValid(event.target.value as string !== ''); 
    if(deptValid){
        setDept(event.target.value as string);
    }else{
        setDept("비공개");
    }
   
    console.log(dept)
  };
  const departmentOptions = departments.map((department) => (
    <MenuItem key={department.value} value={department.value}>
      {department.label}
    </MenuItem>
  ));
  const handlestu_numChange = (event: SelectChangeEvent) => {
    setStuNumValid(event.target.value as string !== ''); 
    if(stuNumValid){
        setStu_num(event.target.value as string);
        setStu_NUM(parseInt(stu_num));
    }else{
        setStu_NUM(0);
    }
  };
  const handledageChange = (event: SelectChangeEvent) => {

    setAgeValid(event.target.value as string !== ''); 
    if(ageValid){
        setAge(event.target.value as string);
        setAge_num(parseInt(age))
    }else{
        setAge_num(0);
    }
  };
  const handlembtiChange = (event: SelectChangeEvent) => {
   
    setMbtiValid(event.target.value as string !== ''); 
    if(mbtiValid){
        setMbti(event.target.value as string)
    }else{
        setDept("비공개");
    }
  };
  const mbtiOptions = mbtis.map((mbtis) => (
    <MenuItem key={mbtis.value} value={mbtis.value}>
      {mbtis.label}
    </MenuItem>
  ));
  const isFormValid = dormValid &&  roomValid ;

    
  const handleSubmit = async (e: React.FormEvent) => {
    console.log(`
    1.${dorm_num}
    2.${room_num}
    3.${dept}
    4.${stu_NUM}
    5.${age_num}
    6.${mbti}
    `)
    e.preventDefault();
   
    //usenavigate('/resulthome');
   if(isFormValid){
     try {
      const response = await fetch('http://aniroomi-env.eba-rj7upyms.ap-northeast-2.elasticbeanstalk.com/detail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body:  JSON.stringify({
            dorm: dorm_num,
            room: room_num,
            dept: dept,
            stu_num: stu_NUM,
            age: age_num,
            mbti: mbti,
          }),
        credentials: 'include',
      });

      // Handle the response as needed
      console.log(response);
      setLoading(true);  
      // Check if login is successful, then redirect to StarPage

      if (response.ok) {
       //usenavigate('/resulthome');
       // <Loading firstLine='모글리님의' secondLine='생활 유형을 분석 중이에요'/>
       setLoading(true);  
    }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };
   }
   
    return (
        <div>
          {loading ? 
           <Loading address='/roommatelist' firstLine='모글리님의' secondLine='생활 유형을 분석 중이에요'/>
:
<div className="flex flex-col w-full h-screen justify-center items-center font-['700'] mt-[-90px]">
<div className=" text-m text-primary-logo text-center items-center justify-start">
   <div>보다 정확한 추천을 위해,</div>
   <div>아래의 내용을 입력해주세요!</div>
   
</div>

 <div className="mt-4">
   <div>
       {/* 기숙사 건물 */}
       <div className='mb-2 text-ms'>거주하게 될 기숙사 *</div>
           <Box sx={{ minWidth: 250}}>
       <FormControl fullWidth>
       <InputLabel id="demo-simple-select-label" >건물</InputLabel>
           <Select
           labelId="demo-simple-select-label"
           id="demo-simple-select"
           value={dorm}
           label="Age"
           onChange={handledormChange}
           sx={{
                   borderRadius: '10px',
                   height : '48px',
               }}
           >
           <MenuItem value={308}>블루미르홀 308관</MenuItem>
           <MenuItem value={309}>블루미르홀 309관</MenuItem>
           {/* <MenuItem value={30}>퓨처하우스</MenuItem> */}
           </Select>
       </FormControl>
           </Box>
       </div>

       {/* 호실 */}
       <div className='mb-2 mt-4 text-ms'>호실 인원 *</div>
         <Box sx={{ minWidth: 250 }}>
         <FormControl fullWidth>
         <InputLabel id="demo-simple-select-label" >인원</InputLabel>
           
             <Select
             labelId="demo-simple-select-label"
             id="demo-simple-select"
             value={room}
             label="Age"
             onChange={handleroomChange}
             sx={{
               borderRadius: '10px',
               height : '48px',
           }}
             >
             <MenuItem value={2}>2인실</MenuItem>
             <MenuItem value={4}>4인실</MenuItem>
             </Select>
         </FormControl>
         </Box>
</div>


<div className=" text-m text-center text-primary-logo items-center justify-start mt-6">
      <div>(선택사항)</div>
   
</div>
       
<div className="mt-[-8px] flex flex-col items-center justify-start ">
         <div className="flex flex-col items-center mt-4 gap-5">
             {/* 대학 */}
       <div className="flex flex-row gap-4">
       <div className='mb-2 mt-4 text-ms'>학과</div>
         <Box sx={{ minWidth: 200 }}>
         <FormControl fullWidth>
         <InputLabel id="demo-simple-select-label" >비공개</InputLabel>
           
             <Select
             labelId="demo-simple-select-label"
             id="demo-simple-select"
             value={dept}
             label="Age"
             onChange={handledeptChange}
             sx={{
               borderRadius: '10px',
               height : '48px',
           }}
             >
              {departmentOptions}
             </Select>
         </FormControl>
         </Box>
       </div>
           {/* 학번 */}
           <div className="flex flex-row gap-4">
         <div className='mb-2 mt-4 text-ms'>학번</div>
         <Box sx={{ minWidth: 200 }}>
         <FormControl fullWidth>
         <InputLabel id="demo-simple-select-label" >비공개</InputLabel>
           
             <Select
             labelId="demo-simple-select-label"
             id="demo-simple-select"
             value={stu_num}
             label="Age"
             onChange={handlestu_numChange}
             sx={{
               borderRadius: '10px',
               height : '48px',
           }}
             >
                <MenuItem value={0}>비공개</MenuItem>
              <MenuItem value={16}>16학번</MenuItem>
             <MenuItem value={17}>17학번</MenuItem>
             <MenuItem value={18}>18학번</MenuItem>
             <MenuItem value={19}>19학번</MenuItem>
             <MenuItem value={20}>20학번</MenuItem>
             <MenuItem value={21}>21학번</MenuItem>
             <MenuItem value={22}>22학번</MenuItem>
             <MenuItem value={23}>23학번</MenuItem>
             </Select>
         </FormControl>
         </Box>
         </div>
        
       

         <div className="flex flex-row gap-2">

           {/* 나이 */}
         <div className='mb-2 mt-4 text-ms'>나이</div>
         <Box sx={{ minWidth: 80 }}>
         <FormControl fullWidth>
         <InputLabel id="demo-simple-select-label" >비공개</InputLabel>
           
             <Select
             labelId="demo-simple-select-label"
             id="demo-simple-select"
             value={age}
             label="Age"
             onChange={handledageChange}
             sx={{
               borderRadius: '10px',
               height : '48px',
           }}
             >
             <MenuItem value={0}>비공개</MenuItem>
             <MenuItem value={20}>20</MenuItem>
             <MenuItem value={21}>21</MenuItem>
             <MenuItem value={22}>22</MenuItem>
             <MenuItem value={23}>23</MenuItem>
             <MenuItem value={24}>24</MenuItem>
             <MenuItem value={25}>25</MenuItem>
             <MenuItem value={26}>26</MenuItem>
             
             </Select>
         </FormControl>
         </Box>


           {/* mbti */}
           <div className='mb-2 mt-4 text-ms'>mbti</div>
         <Box sx={{ minWidth: 80 }}>
         <FormControl fullWidth>
         <InputLabel id="demo-simple-select-label" >비공개</InputLabel>
           
             <Select
             labelId="demo-simple-select-label"
             id="demo-simple-select"
             value={mbti}
             label="Age"
             onChange={handlembtiChange}
             sx={{
               borderRadius: '10px',
               height : '48px',
           }}
             >
             {mbtiOptions}
             
             </Select>
         </FormControl>
         </Box>
         </div>

        
         </div>
</div>

<Button onClick={handleSubmit}>회원가입 하기</Button>  
</div>
     

          }  
        </div>
        

           
    
    )
}
