import { Aggregate, type IResult, Ok, type UID } from 'types-ddd';
import { ApplicationStatusLog } from './application-status-log.vo';
import type { ApplicationStatusUpdate } from './application-status-update.en';
import { PermitType } from './permit-type.vo';
import { BuildingType } from './building-type.vo';

export interface ApplicationProps {
	id?: UID;
	statusLog: ApplicationStatusLog;
	permitType: PermitType;
	buildingType: BuildingType;
	applicantId: UID;
}

export class Application extends Aggregate<ApplicationProps> {
	private constructor(props: ApplicationProps) {
		super(props);
	}

	public static override create(props: ApplicationProps): IResult<Application> {
		const application = new Application(props);
		return Ok(application);
	}

	public static createWithDefaults(
		props: Partial<ApplicationProps> & Pick<ApplicationProps, 'applicantId'>
	) {
		const propsWithDefaults: ApplicationProps = {
			statusLog: ApplicationStatusLog.createWithDefaults().value(),
			permitType: PermitType.createWithDefaults().value(),
			buildingType: BuildingType.createWithDefaults().value(),
			...props
		};
		return this.create(propsWithDefaults);
	}

	get statusUpdates(): ApplicationStatusLog {
		return this.props.statusLog;
	}

	public latestStatusUpdate(): ApplicationStatusUpdate {
		return this.statusUpdates.latest();
	}
}
