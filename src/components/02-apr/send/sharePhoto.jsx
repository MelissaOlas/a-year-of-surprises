const SharePhoto = ({ photoRef }) => {
  const sharePhoto = async () => {
    if (!photoRef.current) {
      console.error("Photo non disponible");
      return;
    }

    try {
      photoRef.current.toBlob(
        async (blob) => {
          const file = new File([blob], `photo-${Date.now()}.jpg`, {
            type: "image/jpeg",
          });

          if (navigator.share && navigator.canShare({ files: [file] })) {
            await navigator.share({
              files: [file],
              title: "Photo de M",
              text: "Photo prise avec Mars",
            });
          } else {
            // desktop fallback (download)
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = `photo-${Date.now()}.jpg`;
            link.click();
            URL.revokeObjectURL(url);
          }
        },
        "image/jpeg",
        0.9
      );
    } catch (error) {
      if (error.name !== "AbortError") {
        console.error("Erreur:", error);
      }
    }
  };

  return (
    <button className="result-button" onClick={sharePhoto}>
      <span className="material-symbols-outlined">send</span>
    </button>
  );
};

export default SharePhoto;
