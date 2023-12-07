import { Avatar, Button, Stack } from "@mui/material";
import { useEffect, useCallback, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SendIcon from '@mui/icons-material/Send';
type ChattingPageParams = {
    apply_id : string;
}
export const Chatting = () => {
    const { apply_id } = useParams<ChattingPageParams>();
    const [inputHeight, setInputHeight] = useState(60); // 초기값은 입력 부분의 높이
    //const [msgInput, setMsgInput] = useState('');
    const [msg, setMsg] = useState('');
    const [chat, setChat] = useState([]);
    //const message="안녕하세요! "
    const [name, setName] = useState('');
    const [chkLog, setChkLog] = useState(false);
    const [socketData, setSocketData] = useState();
    const [isMatched, setIsMatched] = useState(false);
    const [wantMatch, setWantMatch] = useState(false);
    const ws = useRef(null);




    const messageStyle = {
        maxWidth:' 70%',

        //`${message.length * 15}px`,  // 예시: 글자 수에 따라 동적으로 설정
    };

    useEffect(() => {
        const fetchNickname = async () =>{
            try{
                const response = await fetch(`http://aniroomi-env.eba-rj7upyms.ap-northeast-2.elasticbeanstalk.com/nickname`,{
                    method: 'GET',
                    credentials: 'include',
                });

                // Check if login is successful, then redirect to StarPage
                if (response.ok) {
                    const nicknameData = await response.text();
                    console.log(nicknameData);
                    setName(nicknameData);
                    console.log(name);
                }else{
                    console.error('Failed to fetch nickname : ',response.status, response.statusText);
                }
            } catch (error) {
                console.error('Failed to fetch nickname : ', error);
            }
        };
        fetchNickname();
    },[]);

    useEffect(() => {
        const handleResize = () => {
            setInputHeight(window.innerHeight * 0.1); // 예시: 뷰포트 높이의 10%
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const handleInputChange = (e:any) => {
        // 여기에서 메시지 전송 로직을 구현하면 됩니다.
        // 메시지 변수에는 입력된 메시지가 들어 있습니다.

        setMsg(e.target.value)
    };


    const webSocketLogin = useCallback(() => {
        // @ts-ignore
        ws.current = new WebSocket(`ws://aniroomi-env.eba-rj7upyms.ap-northeast-2.elasticbeanstalk.com/socket/chatt/${apply_id}`);
// @ts-ignore
        ws.current.onopen = () => {
            console.log('WebSocket connection opened');
        };
// @ts-ignore
        ws.current.onmessage = (message) => {
            console.log('WebSocket message received:', message.data);
            const newMessage = JSON.parse(message.data);
            // @ts-ignore
            setChat((prevChat) => {
                const newChat = [...prevChat, newMessage];
                console.log('New chat state:', newChat); // 로깅 추가
                return newChat;
            });
        };
// @ts-ignore
        ws.current.onclose = (event: any) => {
            console.log('WebSocket connection closed:', event);
        };
// @ts-ignore
        ws.current.onerror = (error: any) => {
            console.error('WebSocket error:', error);
        };
    }, [apply_id]);


    const handleSendMessage = useCallback( async() => {
        console.log('전송된 메시지:', msg);
        if (!chkLog) {
            if (name === '') {
                alert('이름을 입력하세요.');
                // @ts-ignore
                document.getElementById('name').focus();
                return;
            }
            webSocketLogin();
            setChkLog(true);
        }
        
        if (msg !== '') {
            const data = {
                name,
                msg,
                date: new Date().toLocaleString(),
            };

            const temp = JSON.stringify(data);

            // @ts-ignore
            if (ws.current.readyState === WebSocket.OPEN) {
                // @ts-ignore
                ws.current.send(temp);
            } else {
                console.warn('WebSocket is not open, waiting for connection to open…');
                // Wait for the connection to open
                setTimeout(() => {
                    // Check again and send the message if the connection is open
                    // @ts-ignore
                    if (ws.current.readyState === WebSocket.OPEN) {
                        // @ts-ignore
                        ws.current.send(temp);
                    } else {
                        console.error('WebSocket is still not open. Message not sent.');
                    }
                }, 1000); // Adjust the timeout duration as needed
            }
        } else {
            alert('메세지를 입력하세요.');
            // @ts-ignore
            document.getElementById('msg').focus();
            return;
        }
        setMsg('');

        try {
          const response = await fetch('http://aniroomi-env.eba-rj7upyms.ap-northeast-2.elasticbeanstalk.com/sending/message', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body:  JSON.stringify({
              chatRoomId: apply_id,
              nickname: name,
              message: msg,
              date:  new Date().toLocaleString(),
              }),
            credentials: 'include',
          });

          // Handle the response as needed
          console.log(response);

          // Check if login is successful, then redirect to StarPage
          if (response.ok) {
           console.log(
            `
            chatRoomId: ${apply_id},
              nickname: ${name},
              message: ${msg},
              date: ${ new Date().toLocaleString()},
            `
           )
          }
        } catch (error) {
          console.error('Error during login:', error);
        }



    }, [chkLog, msg, name, webSocketLogin]);

    const buttonColor = msg == '' ? 'bg-zinc-100' : 'bg-primary-logo'
    const onClick = () =>{
      setWantMatch(!wantMatch);
    }
    return (
        <div className="flex flex-col items-center w-full">
            <div className="max-w-[413px] h-[100px] w-full bg-primary-logo fixed top-0 flex items-center justify-center" style={{ zIndex: 200 }}>
                <div className="font-['700'] text-3xl text-white">모글리님</div>
            </div>
            <div className="max-w-[413px] w-full fixed min-h-screen max-h-screen bg-white rounded-t-3xl mt-[52px] overflow-y-auto p-8" style={{ zIndex: 20000 }}>
            <div className="  top-0 fixed max-w-[413px] flex justify-center text-center items-center mt-[80px]  h-[60px] w-full ml-[-32px] bg-white-300   rounded-t-3xl" style={{ position: 'fixed', width: '100%',zIndex: 200 } }>
            
            <div className="px-6 w-full top-0 fixed mt-[110px] max-w-[413px] flex justify-center ">
              {isMatched ? 
              <button className="border-2 border-primary-logo w-[200px] h-12 bg-green-400 text-xl text-black  rounded-2xl mt-[-10px] font-['600']">
                매칭 완료
              </button>:
              <div>

                {wantMatch ? 
              <button onClick={onClick} className=" border-2 border-primary-logo w-[200px] h-12 text-primary-logo text-xl  rounded-2xl mt-[-50px] font-['600']">매칭하기</button>
              :
              <button onClick={onClick} className=" bg-primary-logo w-[200px] h-12 text-white text-xl  rounded-2xl mt-[-50px] font-['600']">매칭 대기중 (1/2)</button>
              }
              </div>
              }
           </div>
          </div>
                <div className="mt-[70px] flex flex-col gap-y-6">
                    {chat.map((item: any, idx) => (
                        <div key={idx} className={item.name === name ? 'flex flex-row gap-2 justify-end' : 'flex flex-row items-center gap-2'}>
                            {item.name !== name && (
                                <Stack direction="row" spacing={2}>
                                    <Avatar alt={item.name} sx={{ bgcolor: 'pink', width: 50, height: 50 }} src={process.env.PUBLIC_URL + '/cat.png'} />
                                </Stack>
                            )}
                            <div className={item.name === name ? 'flex flex-row gap-2 justify-end' : 'flex flex-row gap-2'}>
                                <div className={`max-w-2/3 break-words ${item.name === name ? 'bg-primary-logo text-white rounded-3xl rounded-tr-md' : 'bg-zinc-100 font-[600] text-primary-bg rounded-3xl rounded-tl-md'} p-2 px-4`} style={messageStyle}>
                                    {item.msg}
                                </div>
                                <div className="font-['600'] text-primary-gray text-xxs flex items-end">{item.date}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 메시지 입력 부분 */}
                <div className="max-w-[413px] flex w-full justify-center items-center ml-2">
                    <div className="flex justify-center items-center" style={{ position: 'fixed', bottom: 0, width: '100%', height: inputHeight, padding: '10px' }}>
                        <div className="max-w-[413px] flex flex-row justify-evenly w-full">
                            <input
                                name="msgInput"
                                value={msg}
                                onChange={handleInputChange}
                                className="bg-zinc-100 h-100vh max-h-[52px]"
                                type="text"
                                placeholder="메시지를 입력하세요"
                                style={{ width: '80%', borderRadius: '20px', padding: '5px' }}
                            />

                            <div className="w-20 h-full rounded-2xl">
                                <button
                                    onClick={handleSendMessage}
                                    type="submit"
                                    className={`text-center ${msg === '' ? 'bg-zinc-100' : 'bg-primary-logo'}`}
                                    disabled={msg === ''} // 입력값이 없으면 버튼 비활성화
                                    style={{ marginLeft: '10px', padding: '8px 16px', borderRadius: '20px', color: 'white', border: 'none' }}
                                >
                                    <SendIcon />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}