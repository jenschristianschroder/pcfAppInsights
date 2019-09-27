import {IInputs, IOutputs} from "./generated/ManifestTypes";
import { ApplicationInsights } from "@microsoft/applicationinsights-web";

export class pcfAppInsights implements ComponentFramework.StandardControl<IInputs, IOutputs> {
	private _instrumentationKey: string;
	private _appInsights: ApplicationInsights;
	private _context: ComponentFramework.Context<IInputs>;

	private _container: HTMLDivElement;
	private _imgElement: HTMLImageElement;

	private _img: string;
	/**
	 * Empty constructor.
	 */
	constructor()
	{
		this._img = "data: image/gif;base64,R0lGODlhMgAyAPYAAGUed2YfeWgfemUidmcodmYheWkjemcoeWssfG41fW85fXA1fnE9f3d3d3t7e281gXA0gXM8g3g9iHVDhHhGh31Kh3xGin1Li35Ri4JMjoNRjYJbjYRUk4pXloZdk4pblYxbmY1jl41lmo9pmpBjnJJrnZJynJZuopdxoZl1pJx7pp58qKJ+rJOTk5+fn5+BqqOHraKJq6aJsKyMtK2Wta6btLCbt7GXvLScu6Ojo6ysrLShu7mlv7eovrmpv7e3t7e4t7i3uLm5ubujwryrw8CnxsGqxsWvysq3zsu5z8u20M270s/A0tLC1dXG2dXK2dnM3NTU1NrQ3tvb297S4eLW4+Ta5ubc6OTk5Ovj7Ozs7PDr7/Lu8vXz9Pn69/r3+f7+/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAQAAAAALAAAAAAyADIAAAf+gGCCg4SFhoeIiYqLjI2Oj2BeXFlXVVlcXpCahJlcUEMrIhwWFhwiKzhPmF+bjZJJJxQJs7S1EyVHWq2LXlYvDLW0CxAPCcXGI1K7iF5PHsYP0dIJw8TFCAUBFEqZy4NeVBvUC9Ll1goJCAcFAgITS96DWSPQ5dIQxOgIBgIA/AIWrHTb9YUGNXvmFiRQgIBAuwABAAwYsKLLwE1VMJBDeG8WggECQILMFuBBE284EuDjeCydgX8jAxQAEIAFq02S6NVDCI1dSAAhIQqImCHLrisVZpWrZ8xAyQDtgsqMCGABlF1QJihdWg6i0KEBDEhsBwBBkl1NgJmDkC7aQ4j+BtbNDBnVwJFdTBggjDAiBgwQ/w50YPHCg1OIJAkY2RVlwoLH0RKsINKjR5ESEAycIMKjB5ERByJCHHBACU4wVzQsUBAZw5AaFTLU2PEgwhAaFSrQ2BEBMc0HVFp5+aLi4AMEHoiYkKiCiIQMRE5EbG7B60wQXJYl0Xrswu0KC1T4wJDcRIILNnD0hhoAwRBvXFDQUleC8g7PPYYQGbJDf4l/Q4GQxUWafCEFBukcAMABH7Aggw1E1FADETvIsAIHoUElQARMEKiJF15sRxJQBByAAhEYcBDdOlNBhEAR8QzyBRISeBXARJtdgEF0A0yVzQJFfOHhLl4gsYCNA2z+ZoEGRJTQowAFFPDikN58gQMBUOFIRAYaGFEClNkUMMNNMRLyxRYiZAlAfUs2CRQAAHwwYJmHNPFAREkS0eZ//SCABJ2IdJHCaDkyWQJNAZSQHaCHOAHBjSdW0OWhAiCwBJVlstLFCQAUUGiTEZGwKKOGeHGEAQOcqGN0ARDwHqmFdJPFBQeIMAMFGNwgwgEUXAErIl9AocQSTCyxhBNLKAEFmb826+yzhkzxAxDUCvHDD9ZGAS0hQDTgwLcOeBuuDsw+KwS46I6LKannotsCuDpsO4gWUdRrr71YyKuvI/Tei+++YHShQ7oOtJAvwFoMLG4LUwA8rw4uuJBDww4JyyjkuhVnzGggADs=";
		this._appInsights = new ApplicationInsights({ config: {
			instrumentationKey: "na"
			/* ...Other Configuration Options... */
			} 
		});
	}

	/**
	 * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.
	 * Data-set values are not initialized here, use updateView.
	 * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.
	 * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.
	 * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.
	 * @param container If a control is marked control-type='standard', it will receive an empty div element within which it can render its content.
	 */
	public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container:HTMLDivElement)
	{
		this._context = context;

		this._container = container;
		this._container.style.width = "50px";
		this._container.style.height = "50px";
		this._imgElement = document.createElement("img");
		this._imgElement.setAttribute("src", this._img);
		
		this._container.appendChild(this._imgElement);

		const __appInsights = new ApplicationInsights({ config: {
			instrumentationKey: "na"
			/* ...Other Configuration Options... */
			} 
		});
		if(context.parameters.instrumentationKey.raw)
		{
			this._instrumentationKey = context.parameters.instrumentationKey.raw;
			__appInsights.config.instrumentationKey = this._instrumentationKey;
			__appInsights.loadAppInsights();
		}
		this._appInsights = __appInsights;
		if(context.parameters.trackScreenView.raw)
		{
			this._appInsights.trackPageView({name: context.parameters.trackScreenView.raw});
		}
	}


	/**
	 * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
	 * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
	 */
	public updateView(context: ComponentFramework.Context<IInputs>): void
	{
		// Add code to update control view
	}

	/** 
	 * It is called by the framework prior to a control receiving new data. 
	 * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”
	 */
	public getOutputs(): IOutputs
	{
		return {};
	}

	/** 
	 * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
	 * i.e. cancelling any pending remote calls, removing listeners, etc.
	 */
	public destroy(): void
	{
		// Add code to cleanup control if necessary
	}
}