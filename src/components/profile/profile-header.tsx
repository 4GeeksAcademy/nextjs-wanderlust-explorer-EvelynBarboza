type ProfileHeaderProps = {
	profileName: string;
};

export function ProfileHeader({ profileName }: ProfileHeaderProps) {
	return (
		<div className="rounded-lg border border-slate-200 bg-white p-6">
			<p className="text-sm font-medium text-slate-500">Profile</p>
			<h1 className="mt-2 text-3xl font-semibold">{profileName}</h1>
		</div>
	);
}
