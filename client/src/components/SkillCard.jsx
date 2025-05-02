import PropTypes from "prop-types";

const SkillCard = ({
    imgSrc,
    label,
    desc,
    classes
    }) => {
    return (
        <div className={'flex items-center gap-3 ring-2 ring-[rgb(var(--zinc700))] rounded-2xl p-3 hover:bg-[rgb(var(--zinc800))] transition-colors group ' + classes}>
            <figure className="bg-[rgb(var(--zinc800)_/_0.5)] rounded-lg overflow-hidden w-12 h-12 p-2 group-hover:bg-[rgb(var(--zinc900))] transition-colors">
                <img src={imgSrc}
                     width={32}
                     height={32}
                     alt={label}
                     className=""/>
            </figure>
            <div className="">
                <h3 className="">{label}</h3>
                <p className="text-[rgb(var(--zinc400))] text-sm">
                    {desc}
                </p>
            </div>
        </div>

    );
}
SkillCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    desc: PropTypes.string,
    classes: PropTypes.string
}
export default SkillCard;