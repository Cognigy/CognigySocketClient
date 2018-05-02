import {CognigyError} from "./cognigyError";
import {Output} from "./output";
import {IFinalPing} from "./finalPing";

export interface Options {
	baseUrl: string;
	URLToken: string;
	user: string;

	/* The current session for this user. Used to generate unique sessions for a user on each new "connect" */
	session: string;

	channel: string;

	keepMarkup?: boolean;

	reconnection?: boolean;
	interval?: number;
	expiresIn?: number;

	resetState?: boolean;
	resetContext?: boolean;
	reloadFlow?: boolean;
	resetFlow?: boolean;

	handleError?: (error: CognigyError) => void;
	handleException?: (error: CognigyError) => void;
	handleOutput?: (output: Output) => void;

	handleLogstep?: (data: any) => void;
	handleLogstepError?: (data: any) => void;
	handleLogflow?: (data: any) => void;
	
	handlePing?: (finalPing: IFinalPing) => void

	res?: any;
	passthroughIP?: string;
};