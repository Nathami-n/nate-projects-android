import { Redirect, router } from "expo-router";
import { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "@/firebase/config";
import { Loading } from "@/components";


export default function RedirectPage() {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })

        return () => unsubscribe();
    }, []);

    if (loading) {
        return <Loading />
    };
    if (user) {
        router.replace("/(tabs)");
        return null;
    }

    return <Redirect href={"/(auth)"} />
}