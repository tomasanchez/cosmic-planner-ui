import {useState} from "react";
import {InitialHookStatus} from "@react-buddy/ide-toolbox";


export const useInitial: () => InitialHookStatus = () => {
    /* eslint-disable @typescript-eslint/no-unused-vars */
    const [status, setStatus] = useState<InitialHookStatus>({
        loading: true,
        error: false,
    });

    setTimeout(() => {
        setStatus({
            loading: false,
            error: false,
        });
    }, 500);


    /*
      Implement hook functionality here.
      If you need to execute async operation, set loading to true and when it's over, set loading to false.
      If you caught some errors, set error status to true.
      Initial hook is considered to be successfully completed if it will return {loading: false, error: false}.
    */


    return status;
};
