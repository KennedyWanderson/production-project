import axios from "axios";
import { useState } from "react";
import { useSpring, to, animated, config } from "@react-spring/web";
import { scale, dist } from "vec-la";
import { useDrag } from "react-use-gesture";

import styles from '../styles.module.css'
import NodeBox from "./NodeBox";


export default function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/login', { username, password });
            // Armazenar o token no local storage ou em um estado global
            console.log(response.data);
        } catch (error) {
            console.error('Login failed', error);
        }
    };

    const [{ pos }, api] = useSpring(() => ({ pos: [0, 0] }))
    const [{ angle }, angleApi] = useSpring(() => ({
        angle: 0,
        config: config.wobbly,
    }))
    // direction calculates pointer direction
    // memo is like a cache, it contains the values that you return inside "set"
    // this way we can inject the springs current coordinates on the initial event and
    // add movement to it for convenience

    const bind = useDrag(
        ({ xy, previous, down, movement: pos, velocity, direction }) => {
            api.start({
                pos,
                immediate: down,
                config: { velocity: scale(direction, velocity), decay: true },
            })

            if (dist(xy, previous) > 10 || !down)
                angleApi.start({ angle: Math.atan2(direction[0], -direction[1]) })
        },
        { initial: () => pos.get() }
    )

    return (
        <div className="flex flex-col h-screen items-center justify-center">
            <div className="hidden md:block md:w-1/1 lg:w-2/1">
                <h1 className="font-bold text-2xl">Production Page</h1>
            </div>
                <animated.div
                    className={styles.rocket}
                    {...bind()}
                    style={{
                        transform: to(
                            [pos, angle],
                            // @ts-ignore
                            ([x, y], a) => `translate3d(${x}px,${y}px,0) rotate(${a}rad)`
                        ),
                    }}
                />
            <form className="flex flex-col border-2 border-indigo-500 gap-4 p-10" onSubmit={handleLogin}>
                <input className="px-4 py-3 rounded-lg bg-gray-200 mt-2
                    border focus:border-blue-500 focus:bg-white
                    focus:outline-none" type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
                <input className="px-4 py-3 rounded-lg bg-gray-200 mt-2
                    border focus:border-blue-500 focus:bg-white
                    focus:outline-none" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                <button className="w-full bg-indigo-500 hover:bg-indigo-400
                    text-white rounded-lg px-4 py-3 mt-6" type="submit">Login</button>
                <p className="italic font-bold">Log with your user and password</p>
            </form>
        </div>


    )
}